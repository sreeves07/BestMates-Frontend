import React from 'react';
import { Link } from "react-router-dom"

import "./Sidebar.css"

import logo from "../../Images/LOGO_chat.png"
import defaultProfile from "../../Images/LOGO_favicon.png"

function MessagingNav() {
    return (
        <div className="messaging-nav">
            <img id="chat-mate-logo" src={logo} width="70px" alt="ChatMate"/>
            <div className='exit-profile-messaging-nav'>
                <img src={defaultProfile} width="30px" alt="user" />
                <Link 
                  style={{margin: "0px", paddingRight: "6px",    paddingLeft: "6px"}} 
                  className="sign-in-btn" 
                  to="/users" >Exit</Link>
            </div>
        </div>
    );
}

export default MessagingNav;