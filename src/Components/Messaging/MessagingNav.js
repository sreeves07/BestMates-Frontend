import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../../Firebase/context";
import logo from "../../Images/LOGO_chat.png";
import "./Sidebar.css";

const API = process.env.REACT_APP_API_URL;

function MessagingNav() {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userImg, setUserImg] = useState("");
  const { user } = useContextAuthProvider();

  useEffect(() => {
    axios
      .get(`${API}/user/${user.uid}/images`)
      .then((res) => {
        setUserImg(res.data[0].profile_image);
      })
      .catch((e) => console.error(e));

    axios
      .get(`${API}/user/${user.uid}`)
      .then((res) => {
        setUserDisplayName(res.data[0].first_name);
      })
      .catch((e) => console.error(e));
  }, [user.uid]);

  return (
    <div className="messaging-nav">
      <img id="chat-mate-logo" src={logo} width="100px" alt="ChatMate" />
      <div style={{ paddingLeft: "10px", paddingTop: "8px" }}>
        <img
          src={userImg}
          style={{
            borderRadius: "100%",
            border: "2px solid var(--mainColor)",
            marginRight: "5px",
          }}
          width="65px"
          alt="user"
        />
      </div>
    </div>
  );
}

export default MessagingNav;
