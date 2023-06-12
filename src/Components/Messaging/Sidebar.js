import React, { useState } from 'react';
import "./Sidebar.css"
import MessagingNav from './MessagingNav';
import Search from './Search';
import Chats from './Chats'

function Sidebar() {
    const [ searchedUser, setSearchedUser ] = useState()
    const [ error, setError ] = useState(false)

    return (
        <div className='sidebar'>
            <MessagingNav />
            <Search setSearchedUser={setSearchedUser} setError={setError}/>
            <Chats error={error} searchedUser={searchedUser}/>
        </div>
    );
}

export default Sidebar;