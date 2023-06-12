import React from 'react';
import { MDBCard } from 'mdb-react-ui-kit';
import Sidebar from './Sidebar';
import Chat from './Chat';

function ChatApp() {
    return (
       
        <MDBCard className="messages-container">
            <Sidebar />
            <Chat />
        </MDBCard>
   
    );
}

export default ChatApp;