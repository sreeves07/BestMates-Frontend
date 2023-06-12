import React from 'react';
import logo from "../../Images/LOGO_favicon_color.png"

function Chats() {
  return (
    <div className='chats'>
      <div className="user-messages">
        <img className='user-img' src={logo} alt="user"/>
        <div className='user-chat'>
          Name
          <div style={{scale: "0.5", }} >{"🟢"}</div>
        </div>
      </div>

      <div className="user-messages">
        <img className='user-img' src={logo} alt="user"/>
        <div className='user-chat'>
          Name
          <div style={{scale: "0.5", }} >{"🟢"}</div>
        </div>
      </div>

    </div>
  );
}

export default Chats;