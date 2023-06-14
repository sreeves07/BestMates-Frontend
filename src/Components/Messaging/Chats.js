import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useContextAuthProvider } from "../../Firebase/context";
import { useContextChatProvider } from "./ChatContext";

function Chats() {
  const { user } = useContextAuthProvider();
  const { dispatch } = useContextChatProvider();
  const [chats, setChats] = useState([]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user.uid && getChats();
  }, [user.uid]);

  return (
    <div className="chats">
      <span style={{ color: "#cbb1ff", fontSize: "20px" }}>Chats</span>
      {Object.entries(chats)
        ?.sort((a, b) => {
          return b[1].date - a[1].date;
        })
        .map((chat) => {
          return (
            <div
              key={chat[0]}
              className="user-chat"
              onClick={() => handleSelect(chat[1].userInfo)}>
              <img
                style={{
                  borderRadius: "100%",
                  border: "2px solid var(--secondaryColor)",
                }}
                className="user-img"
                src={chat[1].userInfo.photoURL}
                alt="user"
              />
              <div>
                <span style={{ display: "block" }} className="user-chat-info">
                  {chat[1].userInfo.displayName}
                </span>
                <span
                  style={{ fontSize: "10px", color: "var(--secondaryColor)" }}>
                  <img
                    width="23"
                    src="https://img.icons8.com/plasticine/100/google-maps-new.png"
                    alt="google-maps-new"
                  />
                  {chat[1].userInfo.city}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Chats;
