import React, { useState, useEffect } from 'react';
import { createContext } from 'utils/context';
import mockFetch from 'utils/api';

const ChatContext = createContext();

export const useContextSetup = (userId) => {
  const [messages, setMessages] = useState([]);
  const fetch = async ({ method = 'GET', endpoint, query }) => {
    const messages = await mockFetch({ method, endpoint, query });
    setMessages(messages);
  };

  useEffect(() => {
    console.log('this is calling', userId);
    if (!userId) {
      return;
    }
    fetch({ endpoint: '/api/messages', query: { userId, currentUserId: 1001 } });
  }, [userId]);

  return {
    messages,
    setMessages,
  };
};

export const ChatContextProvider = ({ userId, children }) => {
  const value = useContextSetup(userId);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = ChatContext.useContext;
