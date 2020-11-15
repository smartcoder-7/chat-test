import { mockUsers } from 'services/mockData';

function mockFetch({ endpoint = '', query = {} }) {
  return new Promise((resolve, reject) => {
    const { limit, offset } = query;
    if (!endpoint || endpoint !== '/api/users' ) {
      return reject({ error: 'API endpoint does exits' });
    }

    try {
      setTimeout(() => {
        return resolve(mockUsers.slice(offset, limit));
      }, Math.random() * 1);
    } catch (error) {
      return reject(error);
    }
  });
}

export default mockFetch;