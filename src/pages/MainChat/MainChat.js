import React from 'react';

import ChatArea from 'containers/ChatArea';
import UserArea from 'containers/UserArea';
import { useUserContext } from 'context/User.context';
import { ChatContextProvider } from 'context/Chat.context';
 
const MainChat = () => {
  const { selectedUser } = useUserContext();

  return (
    <div className="main-chat">
      <div className="left">
        <UserArea />
      </div>
      <div className="right">
        <ChatContextProvider userId={selectedUser && selectedUser.id}>
          <ChatArea />
        </ChatContextProvider>
      </div>
    </div>
  );
};

export default MainChat;
