import React from 'react';
import { db } from "../../Firebase/config"
import { collection, getDocs, query, where } from 'firebase/firestore';
import "./Sidebar.css"

function Search({ setSearchedUser, setError, searchUserInput, setSearchUserInput }) {

    const handleSearch = async () => {
        let q = query(collection(db, "users"), where("first_name", "==", searchUserInput))
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setSearchedUser(doc.data())
            })
            
            if (querySnapshot.empty === true) {
                setError(true)
            } else setError(false)

        } catch (e) {
            console.error(e)
        }
    }

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    return (
        <div className="search">
         
                <input 
                  className="light-purple-background"
                  id="search-input" 
                  placeholder="Search user..." 
                  type="text"
                  value={searchUserInput}
                  onChange={(e) => setSearchUserInput(e.target.value)}
                  onKeyDown={handleKey}
                />
                
        </div>
    );
}

export default Search;