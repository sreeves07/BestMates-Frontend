import React from 'react';
import { collection, getDoc, query, serverTimestamp, doc, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from "../../Firebase/config";
import { useContextAuthProvider } from '../../Firebase/context';

function Chats({ searchedUser, error }) {
  const { user, profilePhotoUrl, firstName } = useContextAuthProvider()

  const handleSelect = async () => {
    const combinedId = user.uid > searchedUser.uid ? user.uid + searchedUser.uid : searchedUser.uid + user.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc, (db, "chats", combinedId), {messages: []})
      }

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: searchedUser.uid,
          displayName: searchedUser.first_name,
          photoURL: searchedUser.profilePhotoUrl
        },
        [ combinedId + ".date"]: serverTimestamp()
      });

      await updateDoc(doc(db, "userChats", searchedUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: firstName,
          photoURL: profilePhotoUrl
        },
        [ combinedId + ".date"]: serverTimestamp()
      });

    } catch (e) {console.error(e)}

  }

  return (
    <div className='chats'>

      { error && <span style={{color: "rgb(255, 88, 88)"}}>* User not found</span> }
      {
        searchedUser && 
          <div 
          className="user-messages"
          onClick={handleSelect}>
            <img style={{borderRadius: "100%", border: "2px solid var(--secondaryColor)"}} className='user-img' src={searchedUser.profilePhotoUrl} alt="user"/>
            <div>
              <span style={{display: "block"}} className='user-chat'>{searchedUser.first_name}</span>
              <span style={{color: "white", fontSize: "10px", color: "var(--secondaryColor)"}}>
              <img width="23" src="https://img.icons8.com/plasticine/100/google-maps-new.png" alt="google-maps-new"/>       
              {searchedUser.city}
              </span>
            </div>
          </div>
      }   
    </div>
  );
}

export default Chats;