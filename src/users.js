import {getUsers} from './userService'
export const getUsersLabel = () => {
  return getUsers()
    .then((users) => users.map(user => {
        return user.firstName + ' '+ user.lastName
      })
    );
}