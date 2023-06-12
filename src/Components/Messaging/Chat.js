import React from 'react';
import { Link } from "react-router-dom";
import Messages from "./Messages"
import ChatInput from "./Input"
import { AiFillVideoCamera } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import "./Chat.css"
import { useContextChatProvider } from './ChatContext';

function Chat(props) {
    const { data } = useContextChatProvider()

    return (
        <div className='chat'>
            <div className='chat-info'>
                <span style={{paddingLeft: '10px'}}>To: <span style={{color: "var(--darkMainColor)", fontSize: "20px", paddingLeft: "10px"}}>{data.user?.displayName}</span></span>
                <div className='chat-icons'>
                    <AiFillVideoCamera id='cam-icon' size='30'/>
                    <FiMoreHorizontal id='more-icon' size='30'/>
                    <Link to="/users" id="exit-chat-btn" className="sign-in-btn">
                        Exit
                    </Link>
                </div>
            </div>
            <Messages />
            <ChatInput />
        </div>
    );
}

export default Chat;