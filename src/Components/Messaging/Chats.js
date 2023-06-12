import React, { useEffect, useState } from 'react';
import { getDoc, serverTimestamp, doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from "../../Firebase/config";
import { useContextAuthProvider } from '../../Firebase/context';
import { useContextChatProvider } from './ChatContext';

function Chats({ setSearchedUser, searchedUser, error, setSearchUserInput }) {
  const { user, profilePhotoUrl, firstName } = useContextAuthProvider()
  const { dispatch } = useContextChatProvider()
  const [chats, setChats] = useState([])

  const handleSelect = async () => {
    const combinedId = user.uid > searchedUser.uid ? user.uid + searchedUser.uid : searchedUser.uid + user.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), {messages: []})
      }

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: searchedUser.uid,
          displayName: searchedUser.first_name,
          photoURL: searchedUser.profilePhotoUrl
        },
        [ combinedId + ".date"]: serverTimestamp()
      });

      await updateDoc(doc(db, "userChats", searchedUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: firstName,
          photoURL: profilePhotoUrl
        },
        [ combinedId + ".date"]: serverTimestamp()
      });

    } catch (e) {console.error(e)}
    setSearchedUser(null)
    setSearchUserInput("")
  }

  const handleSelect2 = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u})
  }

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data())
      });
  
      return () => {
        unsub();
      }
    }

    user.uid && getChats()
  }, [user.uid])

  console.log(Object.entries(chats))
  return (
    <div className='chats'>

      { error && <span style={{color: "rgb(255, 88, 88)"}}>* User not found</span> }
      {
        searchedUser && 
          <div 
          className="user-messages"
          onClick={handleSelect}>
            <img style={{borderRadius: "100%", border: "2px solid var(--secondaryColor)"}} className='user-img' src={searchedUser.profilePhotoUrl} alt="user"/>
            <div>
              <span style={{display: "block"}} className='user-chat'>{searchedUser.first_name}</span>
              <span style={{fontSize: "10px", color: "var(--secondaryColor)"}}>
              <img width="23" src="https://img.icons8.com/plasticine/100/google-maps-new.png" alt="google-maps-new"/>       
              {searchedUser.city}
              </span>
            </div>
          </div>
      }   
      {Object.entries(chats)?.sort((a, b) => {
        return b[1].date - a[1].date
      }).map((chat) => {
        return (
          <div 
          key={chat[0]}
          className="user-messages"
          onClick={() => handleSelect2(chat[1].userInfo)}>
            <img style={{borderRadius: "100%", border: "2px solid var(--secondaryColor)"}} className='user-img' src={chat[1].userInfo.photoURL} alt="user"/>
            <div>
              <span style={{display: "block"}} className='user-chat'>{chat[1].userInfo.displayName}</span>
              <span style={{fontSize: "10px", color: "var(--secondaryColor)"}}>
              <img width="23" src="https://img.icons8.com/plasticine/100/google-maps-new.png" alt="google-maps-new"/>       
              Location
              </span>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Chats;