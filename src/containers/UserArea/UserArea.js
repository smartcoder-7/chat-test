import React, { useState } from 'react';

import { useUserContext } from 'context/User.context';
import InputField from 'components/InputField';
import Dropdown from 'components/Dropdown';
import User from 'components/User';
import Button from 'components/Button';
import { FILTER_OPTIONS } from 'utils/constants';


const UserArea = () => {
  const [select, setSelect] = useState(null);
  const [filter, setFilter] = useState('');
  const { users } = useUserContext();

  console.log('users', users);
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
      </div>
    </div>
  );
};

export default UserArea;
