import React from 'react';
import cn from 'classnames';
import moment from 'moment';

const CURRENT_USER = {
  id: 1001,
  firstName: 'Test',
  lastName: 'User',
  email: 'currentuser@gmail.com',
};

const MessageItem = ({ message }) => {
  const position = message.senderId === CURRENT_USER.id ? 'right' : 'left';

  return (
    <div className={cn('message-item', position)}>
      <img 
        src={'https://freesvg.org/img/abstract-user-flat-4.png'} 
        width="40" 
        height="40" 
        alt='user_logo'
      />
      <div className='content'>
        <p className='content__title'>{moment(message.time).format('llll')}</p>
        <p className='content__message'>{message.message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
