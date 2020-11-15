import React from 'react';
import cn from 'classnames';

import { maxChars } from 'utils/helpers';

const User = ({ 
  user, 
  isSelected, 
  onClickStar, 
  onClickUser, 
}) => {
  const handleClickUser = (user) => () => {
    onClickUser(user);
  };

  const handleClickStar = (user) => (event) => {
    event.stopPropagation();
    onClickStar(user);
  };

  return (
    <div className={cn('user', { 'selected': !!isSelected })} onClick={(handleClickUser(user))}>
      <img 
        className="user__logo"
        src={'https://freesvg.org/img/abstract-user-flat-4.png'}
        width="40"
        height="40"
        alt="user"
      />
      <div className='user__info'>
        <div className='info__row'>
          <span className='row__username'>{`${user.firstName} ${user.lastName}`}</span>
          <span className='row__time'>1h</span>
        </div>
        <div className='info__row'>
          <span className='row__email'>{maxChars(user.email, 25)}</span>
          <span role="button" onClick={handleClickStar(user)}>
            <i className={cn('fas fa-star', { 'active': user.isFavorite })} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
