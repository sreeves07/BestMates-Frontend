import { useState } from "react";
import { db } from "../../Firebase/config";
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContextAuthProvider } from "../../Firebase/context";
import "./Sidebar.css";

function Search() {
  const [searchedUser, setSearchedUser] = useState("");
  const [error, setError] = useState(false);
  const [searchUserInput, setSearchUserInput] = useState("");

  const { user, profilePhotoUrl, firstName, userCity } =
    useContextAuthProvider();
  const handleSearch = async () => {
    let q = query(
      collection(db, "users"),
      where("first_name", "==", searchUserInput)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchedUser(doc.data());
      });

      if (querySnapshot.empty === true) {
        setSearchedUser("");
        setError(true);
      } else setError(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      user.uid > searchedUser.uid
        ? user.uid + searchedUser.uid
        : searchedUser.uid + user.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: searchedUser.uid,
          displayName: searchedUser.first_name,
          photoURL: searchedUser.profilePhotoUrl,
          city: searchedUser.city,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", searchedUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: firstName,
          photoURL: profilePhotoUrl,
          city: userCity,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
    setSearchedUser(null);
    setSearchUserInput("");
  };

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
      {error && (
        <span style={{ color: "rgb(255, 88, 88)" }}>* User not found</span>
      )}
      {searchedUser && (
        <div className="searched-users" onClick={handleSelect}>
          <img
            style={{
              borderRadius: "100%",
              border: "2px solid var(--secondaryColor)",
            }}
            className="user-img"
            src={searchedUser.profilePhotoUrl}
            alt="user"
          />
          <div>
            <span style={{ display: "block", color: "white" }}>
              {searchedUser.first_name}
            </span>
            <span style={{ fontSize: "10px", color: "var(--secondaryColor)" }}>
              <img
                width="23"
                src="https://img.icons8.com/plasticine/100/google-maps-new.png"
                alt="google-maps-new"
              />
              {searchedUser.city}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
