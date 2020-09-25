import {TEST_USERS} from './__fixtures__/test-users';

export default {
  getUsers: () => {
    return Promise.resolve(TEST_USERS);
  },
};
