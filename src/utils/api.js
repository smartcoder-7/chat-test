import mockDB from 'services/mockDatabase';

function mockFetch({ method = 'GET', endpoint = '', query = {}, body = {} }) {
  /** for mocking POST method */
  if (method === 'POST') {
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
  return new Promise((resolve, reject) => {
    const { searchTerm = '' } = query;
    if (!endpoint || endpoint !== '/api/users' ) {
      return reject({ error: 'API endpoint does exits' });
    }
    
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

export default mockFetch;