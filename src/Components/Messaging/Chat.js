import React from 'react';
import Messages from "./Messages"
import ChatInput from "./Input"
import { AiFillVideoCamera } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import "./Chat.css"

function Chat(props) {
    return (
        <div className='chat'>
            <div className='chat-info'>
                <span style={{paddingLeft: '10px'}}>Jane</span>
                <div className='chat-icons'>
                    <AiFillVideoCamera id='cam-icon' size='30'/>
                    <FiMoreHorizontal id='more-icon' size='30'/>
                </div>
            </div>
            <Messages />
            <ChatInput />
        </div>
    );
}

export default Chat;