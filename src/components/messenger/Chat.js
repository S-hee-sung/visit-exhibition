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
  /* width: 200px; */
  height: 100%;
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

const AnswerStyled = styled.div`
  color: red;
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
  const [answer, setAnswer] = useState(null);

  // 채팅 입력 및 답변 받기
  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }

    // 선택지에 따라 답변을 결정
    switch (message) {
      case '안녕하세요':
        setAnswer('안녕하세요!');
        break;
      case '전시회 일정':
        setAnswer('일정은 웹사이트에서 확인하세요 ><');
        break;
      case '전시회 위치':
        setAnswer('일정도 웹사이트에서 확인해주세요 ^^');
        break;
      case '안녕히 계세요':
        setAnswer('안녕히 가세요!');
        break;
      default:
        setAnswer('죄송해요, 잘 모르겠어요.');
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
        {answer && <AnswerStyled> Answer : {answer}</AnswerStyled>}
        <InputForm 
          onSubmit={handleSend}
          >
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