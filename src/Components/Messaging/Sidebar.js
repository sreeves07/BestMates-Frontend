import React from 'react';
import "./Sidebar.css"
import MessagingNav from './MessagingNav';
import Search from './Search';
import Chats from './Chats'

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <MessagingNav />
            <Search />
            <Chats />
        </div>
    );
}

export default Sidebar;