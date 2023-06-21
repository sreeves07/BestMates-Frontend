import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../../Firebase/context";
import logo from "../../Images/LOGO_chat.png";
import "./Sidebar.css";

const API = process.env.REACT_APP_API_URL;

function MessagingNav() {
  const [userImg, setUserImg] = useState("");
  const { user, profilePhotoUrl } = useContextAuthProvider();

  useEffect(() => {
    axios
      .get(`${API}/user/${user.uid}/images`)
      .then((res) => {
        setUserImg(res.data[0].profile_image);
      })
      .catch((e) => console.error(e));
  }, [user.uid]);

  return (
    <div className="messaging-nav">
      <img id="chat-mate-logo" src={logo} alt="ChatMate" />
      <div style={{ paddingLeft: "10px", paddingTop: "8px" }}>
        <img src={userImg} width="65px" alt="user" />
      </div>
    </div>
  );
}

export default MessagingNav;
