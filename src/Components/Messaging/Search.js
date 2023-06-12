import React from 'react';
import "./Sidebar.css"

import logo from "../../Images/LOGO_favicon_color.png"

function Search() {
    return (
        <div className="search">
            <form className='search-form'>
                <input 
                  className="light-purple-background"
                  id="search-input" 
                  label="Search..." 
                  type="text"
                />
            </form>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
            <div className="user-messages">
                <img className='user-img' src={logo} alt="user"/>
                <div style={{color: "var(--mainColor)", fontSize: "16px"}}>
                    Name
                    <div style={{scale: "0.5", }} >{"🟢"}</div>
                </div>
            </div>
        </div>
    );
}

export default Search;