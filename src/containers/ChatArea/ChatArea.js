import React from 'react';

import { useUserContext } from 'context/User.context';
import { useChatContext } from 'context/Chat.context';

const ChatArea = () => {
  const { selectedUser } = useUserContext();
  const { messages } = useChatContext();
  console.log('messages', messages);
  const renderBlank = () => (
    <div className="chat-area-blank">
      <h1>Select a conversation</h1>
      <p>Start by selecting a conversation or searching for some specific</p>
    </div>
  );

  const renderMessages = () => (
    <div>render messages</div>
  );

  return (
    <div className="chat-area">
      {!!selectedUser ? renderMessages() : renderBlank()}
    </div>
  );
};

export default ChatArea;
