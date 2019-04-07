import React from 'react';
import TextInputForm from './TextInputForm';
import ChatBox from './ChatBox';
import './publicChat.css';

const Chat = props => (
  <div className="public-chat">
    <ChatBox className="text-output" {...props} />
    <TextInputForm {...props} />
  </div>
);

export default Chat;
