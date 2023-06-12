import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit'
import { AiOutlinePaperClip, AiFillPicture } from "react-icons/ai"


function ChatInput() {
  return (
    <div className='chat-input'>
      <form>
        <textarea 
          id='message-input' 
          ows={2} 
          type='text'
          placeholder='Send a message...'
          />
        <div className='btns-input'>
          <label htmlFor='img'>
          <AiFillPicture size='25'/>
            <input 
              id='img'
              type='file' 
              accept='image/png, image/gif, image/jpeg'
              style={{display: "none"}}
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