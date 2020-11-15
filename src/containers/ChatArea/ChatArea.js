import React, { useState } from 'react';

import { useUserContext } from 'context/User.context';
import { useChatContext } from 'context/Chat.context';
import MessageItem from 'components/MessageItem';
import InputField from 'components/InputField';
import useDebounce from 'hooks/useDebounce';
import Button from 'components/Button';

const ChatArea = () => {
  const { selectedUser } = useUserContext();
  const { messages, fetch } = useChatContext();
  const [messageInput, setMessageInput] = useState('');
  const debouncedInput = useDebounce(messageInput, 100);
  
  const sendMessage = async () => {
    await fetch({
      method: 'POST',
      endpoint: '/api/messages',
      query: {
        senderId: 1001,
        recieverId: selectedUser.id,
        message: debouncedInput,
      },
    });
  };

  const handleChange = (value) => {
    setMessageInput(value);
  };

  const handleClickSend = async () => {
    if (!!debouncedInput.trim()) {
      setMessageInput('');
      await sendMessage();
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && !!debouncedInput.trim()) {
      setMessageInput('');
      await sendMessage();
    }
  };

  const renderBlank = () => (
    <div className="chat-area-blank">
      <h1>Select a conversation</h1>
      <p>Start by selecting a conversation or searching for some specific</p>
    </div>
  );

  const renderMessages = (messages) => (
    <div className="messages-wrapper">
      {messages.map((message, index) => <MessageItem key={index} message={message} />)}
    </div>
  );

  return (
    <div className="chat-area">
      {!selectedUser && renderBlank()}
      <div className="message-area">
        {!!messages.length && renderMessages(messages)}
      </div>
      {!!selectedUser && 
        (<div className="message-input">
          <InputField icon="fa-inbox" onChange={handleChange} onKeyDown={handleKeyDown} />
          <Button onClick={handleClickSend}><i className="fas fa-paper-plane" /></Button>
        </div>)}
    </div>
  );
};

export default ChatArea;
