import React from 'react';

import { useUserContext } from 'context/User.context';

const ChatArea = () => {
  const { selectedUser } = useUserContext();

  console.log('selectedUser', selectedUser);
  const renderBlank = () => (
    <div className="chat-area-blank">
      <h1>Select a conversation</h1>
      <p>Start by selecting a conversation or searching for some specific</p>
    </div>
  );

  return (
    <div className="chat-area">
      {renderBlank()}
    </div>
  );
};

export default ChatArea;
