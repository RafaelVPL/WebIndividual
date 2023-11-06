import {users, posts} from './users';

const authenticateUser = (username, password) => {
  const user = users.find((user) => user.username === username && user.password === password);
  return user ? true : false;
};

export default authenticateUser;