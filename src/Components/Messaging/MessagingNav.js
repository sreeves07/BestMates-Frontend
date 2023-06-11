import React from 'react';
import { Link } from "react-router-dom"

import "./Sidebar.css"

import logo from "../../Images/LOGO_no_text.png"
import defaultProfile from "../../Images/LOGO_favicon.png"

function MessagingNav() {
    return (
        <div className="messaging-nav">
            <img src={logo} width="60px" alt="ChatMate"/>
            <div className='exit-profile-messaging-nav'>
                <img src={defaultProfile} width="30px" alt="user" />
                <Link style={{margin: "0px", paddingRight: "6px", paddingLeft: "6px"}} className="sign-in-btn" >X</Link>
            </div>
        </div>
    );
}

export default MessagingNav;