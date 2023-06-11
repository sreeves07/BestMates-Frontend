import React from 'react';
import "./Sidebar.css"
import MessagingNav from './MessagingNav';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <MessagingNav />
            Sidebar
        </div>
    );
}

export default Sidebar;