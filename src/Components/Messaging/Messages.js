import React, { useEffect, useState } from 'react';
import Message from './Message'
import { useContextChatProvider } from './ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/config';

function Messages() {
  const [ messages, setMessages ] = useState();
  const { data } = useContextChatProvider()

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), ( doc ) => {
      doc.exists() && setMessages(doc.data.messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatId])

  return (
    <div className='messages'>
      {
        messages?.map((message) => {
          return (
            <Message key={message.id} message={message}/>
          )
        })
      }

      <div className='message'>
        <div className='message-info'>
          <img 
            width='40px' 
            src=""
            alt='user'/>
          <span>Just Now</span>
        </div>
        <div className='message-content'><p>Message this is a message</p></div>
      </div>

      <div className='message'>
        <div className='message-info'>
          <img 
            width='40px' 
            src=""
            alt='user'/>
          <span>Just Now</span>
        </div>
      <div className='message-content'><p>Render my messages</p></div>
    </div>

    </div>
  );
}

export default Messages;