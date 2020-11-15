import React from 'react';
import cn from 'classnames';

import { maxChars } from 'utils/helpers';

const User = ({ user, selected, onClickStar, onClickUser }) => {
  return (
    <div className={cn('user', { 'selected': selected })} onClick={onClickUser}>
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
          <span role="button" onClick={onClickStar}>
            <i className={cn('fas fa-star', { 'active': user.isFavorite })} onClick={onClickStar} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
