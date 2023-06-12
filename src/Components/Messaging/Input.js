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
          <AiOutlinePaperClip size='25' />
          <label htmlFor='file'>
            <AiFillPicture size='25'/>
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