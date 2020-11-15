import React, { useState, useRef, useReducer, useEffect } from 'react';

import { useUserContext } from 'context/User.context';
import InputField from 'components/InputField';
import Dropdown from 'components/Dropdown';
import User from 'components/User';
import Button from 'components/Button';
import { FILTER_OPTIONS } from 'utils/constants';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const LIMIT = 20;
const pageReducer = (state, action) => {
  switch (action.type) {
    case 'ADVANCED_PAGE':
      return { ...state, offset: state.offset +  LIMIT };
    default:
      return false;
  }
};

const UserArea = () => {
  const [select, setSelect] = useState(null);
  const [filter, setFilter] = useState('');
  const { users, setIsLoading, fetch, isLoading } = useUserContext();
  const scrollRef = useRef(null);
  const [pager, pagerDispatch] = useReducer(pageReducer, { offset: 0 });
  useInfiniteScroll(scrollRef, pagerDispatch);

  useEffect(() => {
    setIsLoading(true);
    fetch({ endpoint: '/api/users', query: { limit: LIMIT, offset: pager.offset } });
    setIsLoading(false);
  }, [pager.offset]);

  const handleSelectChange = (value) => {
    setSelect(value);
  };

  const handleClickAdd = () => {
    console.log('I am adding somehow!');
  };

  const handleChangeFilter = (value) => {
    setFilter(value);
    console.log('I am chaning a filter', value);
  };

  const handleFollow = () => {
    console.log('I am adding somehow!');
  };

  console.log('users', users);
  return (
    <div className="user-area">
      <div className="user-area__header">
        <div className="header__filter">
          <InputField 
            onChange={handleChangeFilter} 
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
          />
          <Button onClick={handleFollow} className="btn-follow">Follow up</Button>
        </div>
      </div>
      <div className="user-area__user-list">
        {!!users.length && users.map((user, index) => <User key={index} user={user} />)}
        <div ref={scrollRef} style={{ border: '1px solid red' }}></div>
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default UserArea;
