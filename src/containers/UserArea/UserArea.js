import React, { useState, useRef, useReducer, useEffect } from 'react';

import { useUserContext } from 'context/User.context';
import Dropdown from 'components/Dropdown';
import User from 'components/User';
import Button from 'components/Button';
import { FILTER_OPTIONS } from 'utils/constants';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import pageReducer from './reducer';
import { PAGINATION } from 'utils/constants';
import InputField from 'components/InputField';
import useDebounce from 'hooks/useDebounce';

const DELAY_MS = 500;

const UserArea = () => {
  const [select, setSelect] = useState(null);
  const [filter, setFilter] = useState('');
  const debouncedSearchTerm = useDebounce(filter, DELAY_MS);
  const { 
    users, 
    setIsLoading, 
    fetch, 
    isLoading, 
    setUsers,
    toggleSelectUser,
    selectedUser,
  } = useUserContext();
  const scrollRef = useRef(null);
  const [pager, pagerDispatch] = useReducer(pageReducer, { offset: 0 });
  useInfiniteScroll(scrollRef, pagerDispatch);

  useEffect(() => {
    setIsLoading(true);
    console.log('calling api');
    fetch({ 
      endpoint: '/api/users', 
      query: { 
        limit: PAGINATION.limit, 
        offset: pager.offset, 
        searchTerm: debouncedSearchTerm, 
      }, 
    });
    setIsLoading(false);
  }, [pager.offset, debouncedSearchTerm]);

  useEffect(() => {
    pagerDispatch({ type: 'RESET_PAGE' });
    setUsers([]);
  }, [debouncedSearchTerm]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSelectChange = (value) => {
    setSelect(value);
  };

  const handleClickAdd = () => {
    console.log('I am adding somehow!');
  };

  const handleFollow = () => {
    console.log('I am adding somehow!');
  };

  const handleClickUser = (user) => {
    toggleSelectUser(user);
  };

  const handleClickStar = () => {
    
  };

  console.log('users', users);

  return (
    <div className="user-area">
      <div className="user-area__header">
        <div className="header__filter">
          <InputField 
            onChange={handleFilterChange} 
            value={filter} 
            name="filter" 
            placeholder="Search or a new chat"
          />
          <Button onClick={handleClickAdd} className="btn-filter">
            <i className="fal fa-comment-medical" />
          </Button>
        </div>
        <div className="header__dropdown">
          <Dropdown 
            options={FILTER_OPTIONS} 
            onChange={handleSelectChange} 
            value={select} 
            name="dropdown"
          />
          <Button onClick={handleFollow} className="btn-follow">Follow up</Button>
        </div>
      </div>
      <div className="user-area__user-list">
        {!!users.length && users.map(
          (user, index) => 
            (<User 
              key={index} 
              user={user} 
              onClickUser={handleClickUser} 
              onClickStar={handleClickStar}
              isSelected={selectedUser && user.id === selectedUser.id}
            />),
        )}
        <div ref={scrollRef} style={{ border: '1px solid red' }}></div>
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default UserArea;
