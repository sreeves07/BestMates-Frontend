import React from 'react';
import logo from '../../Images/LOGO_favicon.png'

function Message() {
  return (
    <div className='message'>
      <div className='message-info'>
        <img width='40px' src={logo} alt='user'/>
        <span>Just Now</span>
      </div>
      <div className='message-content'><p>Message</p></div>
    </div>
  );
}

export default Message;