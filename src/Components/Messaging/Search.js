import React from 'react';
import "./Sidebar.css"

function Search() {
    return (
        <div className="search">
            <form className='search-form'>
                <input id="search-input" label="Search..." type="text"
                />
            </form>
        </div>
    );
}

export default Search;