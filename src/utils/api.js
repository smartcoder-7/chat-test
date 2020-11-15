import { mockUsers } from 'services/mockData';

function mockFetch({ endpoint = '', query = {} }) {
  return new Promise((resolve, reject) => {
    const { limit, offset, searchTerm = '' } = query;
    if (!endpoint || endpoint !== '/api/users' ) {
      return reject({ error: 'API endpoint does exits' });
    }
    
    try {
      setTimeout(() => {
        return resolve(
          mockUsers
            .filter((user) => user.email.includes(searchTerm))
            .slice(offset, offset + limit));
      }, Math.random() * 2);
    } catch (error) {
      return reject(error);
    }
  });
}

export default mockFetch;