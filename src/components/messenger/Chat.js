import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ChatTop from "./ChatTop";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  justify-content: space-between;
  padding: 8px;
`;

const MessageList = styled.ul`
  list-style: none;
  overflow-y: auto;

`;

const MessageItemLeft = styled.li`
  background-color: #f8f8f8;
  border-radius: 8px;
  text-align: left;
  margin-top: 85px;
  padding: 8px;

`;

const MessageItem = styled.li`
  background-color: #f8f8f8;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
  text-align: left;
  ${(props) =>
    props.isRight &&
    css`
      text-align: right;
  `}
`;

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Input = styled.input`
  flex-grow: 1;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  border: none;
`;

const Button = styled.button`
  border-radius: 8px;
  margin-left: 8px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: #0077cc;
  color: #fff;
`;

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

  const messageList = (
    <MessageList>
      {messages.map((message, index) => (
        <MessageItem key={index} isRight={true}>{message}</MessageItem>
      ))}
    </MessageList>
  );

  return (
    <>
      <Container>
        <ChatTop />
        <MessageItemLeft>무엇을 도와드릴까요?</MessageItemLeft>
        {messageList}
        <InputForm onSubmit={sendMessage}>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </InputForm>
      </Container>
    </>
  );
};

export default Chat;