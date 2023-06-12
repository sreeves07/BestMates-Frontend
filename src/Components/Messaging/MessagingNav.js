import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useContextAuthProvider } from '../../Firebase/context';
import defaultProfile from "../../Images/LOGO_favicon.png"
import logo from "../../Images/LOGO_chat.png"
import "./Sidebar.css"

const API = process.env.REACT_APP_API_URL;



function MessagingNav() {
    const [ userImg, setUserImg ] = useState("")
    const { user } = useContextAuthProvider()
    console.log(user)

    useEffect (() => {
        axios.get(`${API}/user/${user.uid}/images`, ) 
        .then((res) => setUserImg(res.data[0].profile_image))
        .catch((e) => console.error(e))
      
        

    }, [])

    return (
        <div className="messaging-nav">
            <img id="chat-mate-logo" src={logo} width="70px" alt="ChatMate"/>
            <div className='exit-profile-messaging-nav'>
                <img src={userImg} style={{borderRadius: "100%", border: "2px solid var(--mainColor)"}} width="40px" alt="user" />
                <Link 
                  style={{margin: "0px", paddingRight: "6px",    paddingLeft: "6px"}} 
                  className="sign-in-btn" 
                  id="exit-chat-btn"
                  to="/users" >Exit</Link>
            </div>
        </div>
    );
}

export default MessagingNav;