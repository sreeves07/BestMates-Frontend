import React from 'react';
import "./Sidebar.css"

function Search() {
    return (
        <div className="search">
            <form className='search-form'>
                <input 
                  className="light-purple-background"
                  id="search-input" 
                  placeholder="Search..." 
                  type="text"
                />
            </form>
        </div>
    );
}

export default Search;