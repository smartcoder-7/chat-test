import mockDB from 'services/mockDatabase';

function mockFetch({ method = 'GET', endpoint = '', query = {}, body = {} }) {
  /** for mocking POST method */
  if (endpoint === '/api/users' && method === 'POST') {
    return new Promise((resolve, reject) => {
      const { userId } = query;
      try {
        setTimeout(() => {
          return resolve(
            mockDB.update({ userId, body }),
          );
        }, Math.random() * 2);
      } catch (error) {
        return reject(error);
      }
    });
  }

  /** for mocking GET method */
  if (endpoint === '/api/users' && method === 'GET') {
    return new Promise((resolve, reject) => {
      const { searchTerm = '' } = query;
    
      try {
        setTimeout(() => {
          return resolve(
            mockDB.read({ query, searchTerm }));
        }, Math.random() * 2);
      } catch (error) {
        return reject(error);
      }
    });
  }

  if (endpoint === '/api/messages' && method === 'GET') {
    return new Promise((resolve => {
      const { userId, currentUserId } = query;
      setTimeout(() => {
        return resolve(
          mockDB.readMessages({ currentUserId, userId }),
        );
      }, Math.random() * 2);
    }));
  }

  if (endpoint === '/api/messages' && method === 'POST') {
    return new Promise((resolve) => {
      const { senderId, recieverId, message } = query;
      setTimeout(() => {
        return resolve(
          mockDB.writeMessage({
            senderId,
            recieverId,
            message,
            time: new Date(),
          }),
        );
      });
    });
  }
}

export default mockFetch;