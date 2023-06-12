import React from 'react';
import "./Sidebar.css"
import MessagingNav from './MessagingNav';
import Search from './Search';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <MessagingNav />
            <Search />
        </div>
    );
}

export default Sidebar;