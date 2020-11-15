import { mockUsers } from './mockData';

class Database {
  constructor(mockUsers) {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users);
    } else {
      localStorage.setItem('users', JSON.stringify(mockUsers));
      this.users = mockUsers;
    }
  }

  syncWithLocalStorage() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  writeToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  read = ({ query }) => {
    this.syncWithLocalStorage();
    const { limit, offset, searchTerm = '' } = query;
    return this.users
      .filter((user) => (user.firstName + ' ' + user.lastName).includes(searchTerm))
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
}

export default new Database(mockUsers);