import React, { useState, useEffect } from 'react';
import { createContext } from 'utils/context';
import mockFetch from 'utils/api';

const UserContext = createContext();


export const useContextSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  
  const fetch = async ({ endpoint, query }) => {
    const users = await mockFetch({ endpoint, query });
    setUsers(users);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch({ endpoint: '/api/users', query: { limit: 20, offset: 0 } });
    setIsLoading(false);
  }, []);

  return {
    users,
    setUsers,
    isLoading,
    setIsLoading,
  };
};

export const UserContextProvider = ({ children }) => {
  const value = useContextSetup();
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = UserContext.useContext;