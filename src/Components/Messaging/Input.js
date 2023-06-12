import React, { useState } from 'react';
import { AiOutlinePaperClip, AiFillPicture } from "react-icons/ai"
import { useContextAuthProvider } from '../../Firebase/context';
import { useContextChatProvider } from './ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase/config';
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


function ChatInput() {
  const [ text, setText ] = useState("");
  const [ img, setImg ] =useState("")

  const { user } = useContextAuthProvider()
  const { data } = useContextChatProvider()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          console.error(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            });
          })
        }
      )

    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        })
      });
    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [ data.chatId + ".lastMessage" ]: {
        text
      },
      [ data.chatId + ".date" ]: serverTimestamp()
    })

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [ data.chatId + ".lastMessage" ]: {
        text
      },
      [ data.chatId + ".date" ]: serverTimestamp()
    })

    setText("");
    setImg("");
  };

  return (
    <div className='chat-input'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea 
          id='message-input' 
          ows={2} 
          type='text'
          placeholder='Send a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        <div className='btns-input'>
          <label htmlFor='img'>
          <AiFillPicture size='25'/>
            <input 
              id='img'
              type='file' 
              accept='image/png, image/gif, image/jpeg'
              style={{display: "none"}}
              value={img}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </label>
          <label htmlFor='file'>
            <AiOutlinePaperClip size='25' />
            <input 
              id='file'
              type='file' 
              style={{display: "none"}} />
          </label>
          <button 
            id='message-submit-btn'
            className='sign-in-btn'>Send</button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;