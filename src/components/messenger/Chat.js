import React, { useState, useEffect } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  // 메시지 전송
  const sendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  // 입력 폼
  const inputForm = (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );

  // 메시지 목록
  const messageList = (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );

  return (
    <>
      {messageList}
      {inputForm}
    </>
  );
};

export default Chat;