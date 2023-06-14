import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useContextChatProvider } from "./ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/config";

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContextChatProvider();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages?.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
}

export default Messages;
