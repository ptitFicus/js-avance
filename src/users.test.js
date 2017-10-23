import fetchMock from 'fetch-mock';
import {getUsersLabel} from './users';

describe('users', () => {
  test('should show labels', () => {

    const resultMock = [
      { firstName: 'Jon', lastName: 'Snow' },
      { firstName: 'Daenerys', lastName: 'Targaryen' }
    ];

    fetchMock.get('*', resultMock)

    getUsersLabel()
      .then((result) => {
        expect(result[0]).toBe('Jon Snow')
        expect(result[1]).toBe('Daenerys Targaryen')
      })

    fetchMock.restore();
  });
});
