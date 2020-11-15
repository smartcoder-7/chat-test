import React, { useState } from 'react';
import { createContext } from 'utils/context';
import mockFetch from 'utils/api';

const UserContext = createContext();


export const useContextSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  const fetch = async ({ endpoint, query }) => {
    const users = await mockFetch({ endpoint, query });
    setUsers((oldUsers) => [...oldUsers, ...users]);
  };

  const toggleSelectUser = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  const toggleStar = async (user) => {
    const response = await mockFetch({ 
      method: 'POST', 
      endpoint: '/api/users',
      query: {
        userId: user.id,
      },
      body: {
        isFavorite: user.isFavorite ? false : true,
      },
    });

    console.log('toggle star=====>', response);
    if (response) {
      setUsers((users) => users.map(entity => {
        if (entity.id === user.id) {
          return { ...entity, isFavorite: user.isFavorite ? false : true };
        }
  
        return entity;
      }));
    }
  };

  return {
    users,
    setUsers,
    isLoading,
    setIsLoading,
    fetch,
    selectedUser,
    toggleSelectUser,
    toggleStar,
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