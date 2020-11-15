import { mockUsers } from './mockData';
import { mockMessages } from './mockMessages'; 

class Database {
  constructor(mockUsers, mockMessages) {
    const users = localStorage.getItem('users');
    const messages = localStorage.getItem('messages');

    if (users) {
      this.users = JSON.parse(users);
    } else {
      localStorage.setItem('users', JSON.stringify(mockUsers));
      this.users = mockUsers;
    }

    if (messages) {
      this.messages = JSON.parse(messages);
    } else {
      localStorage.setItem('messages', JSON.stringify(mockMessages));
      this.messages = mockMessages;
    }
  }

  syncWithLocalStorage() {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.messages = JSON.parse(localStorage.getItem('messages'));
  }

  writeToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  read = ({ query }) => {
    this.syncWithLocalStorage();
    const { limit, offset, searchTerm = '', filter = null } = query;
    const predicator1 = (user) => user.isFavorite === true;
    const predicator2 = (user) => user.isFavorite === false;
    const noop = () => { return true; };
    let finalPredicator = noop;
    
    if (filter === 'favorite' ) {
      finalPredicator = predicator1;
    } else if (filter === 'unfavorite') {
      finalPredicator = predicator2;
    } 

    return this.users
      .filter((user) => (user.firstName + ' ' + user.lastName).includes(searchTerm))
      .filter(finalPredicator)
      .slice(offset, offset + limit);
  }

  update = ({ userId, body }) => {
    const index = this.users.findIndex((user) => userId === user.id);
    this.users[index] = {
      ...this.users[index],
      ...body,
    };
    
    this.writeToLocalStorage();

    return this.users[index];
  }

  readMessages({ currentUserId = 1001, userId }) {
    this.syncWithLocalStorage();
    return this.messages.filter((message) => {
      if (message.senderId === currentUserId && message.recieverId === userId) {
        return true;
      }

      if (message.senderId === userId && message.recieverId === currentUserId) {
        return true;
      }

      return false;
    });
  }

  writeMessage({ senderId, recieverId, message, time }) {
    this.messages.push({
      senderId,
      recieverId,
      message,
      time,
    });
    this.writeToLocalStorage();

    return {
      senderId,
      recieverId,
      message,
      time,
    };
  }
}

export default new Database(mockUsers, mockMessages);