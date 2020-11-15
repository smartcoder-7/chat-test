import React from 'react';
import ChatArea from 'containers/ChatArea';
import UserArea from 'containers/UserArea';

const MainChat = () => {
  return (
    <div className="main-chat">
      <div className="left">
        <UserArea />
      </div>
      <div className="right">
        <ChatArea />
      </div>
    </div>
  );
};

export default MainChat;
