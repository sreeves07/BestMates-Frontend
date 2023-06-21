import React, { useEffect, useRef } from "react";
import { useContextAuthProvider } from "../../Firebase/context";
import { useContextChatProvider } from "./ChatContext";

function Message({ message }) {
  const { user, profilePhotoUrl } = useContextAuthProvider();
  const { data } = useContextChatProvider();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, user]);

  console.log("user", user, "message", message);

  return (
    <div
      ref={ref}
      className="message"
      style={
        message.senderId === user.uid ? { flexDirection: "row-reverse" } : {}
      }>
      <div className="message-info">
        <img
          width="40px"
          src={
            message.senderId === user.uid ? profilePhotoUrl : data.user.photoURL
          }
          alt="user"
        />
        <span>{data.user.date}</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
