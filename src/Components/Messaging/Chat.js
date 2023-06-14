import React from "react";
import { Link } from "react-router-dom";
import Messages from "./Messages";
import ChatInput from "./Input";
import { AiFillVideoCamera } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./Chat.css";
import { useContextChatProvider } from "./ChatContext";

function Chat(props) {
  const { data } = useContextChatProvider();

  return (
    <div className="chat">
      <div className="chat-info">
        <div className="chat-top-bar">
          <span style={{ fontSize: "15px" }}>To:</span>
          {data.user.displayName && (
            <>
              <span
                style={{
                  color: "var(--darkMainColor)",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}>
                {data.user.displayName}
              </span>
              <img width="40px" src={data.user.photoURL} />
            </>
          )}
        </div>
        <div className="chat-icons">
          <AiFillVideoCamera id="cam-icon" size="30" />
          <br></br>
          <FiMoreHorizontal id="more-icon" size="30" />
          <Link to="/users" id="exit-chat-btn">
            <IoMdClose size="30" />
          </Link>
        </div>
      </div>
      <Messages />
      <ChatInput />
    </div>
  );
}

export default Chat;
