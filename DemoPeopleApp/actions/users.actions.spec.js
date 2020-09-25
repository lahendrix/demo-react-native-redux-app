const {TEST_USERS} = require('../__fixtures__/test-users');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getUsers, UserActionTypes} from './users.actions';
import API from '../API';
const mockStore = configureMockStore([thunk]);

jest.mock('../API', () => {
  return {
    getUsers: jest.fn(),
  };
});

describe('Users Actions', () => {
  it('Should dispatch the correct actions when fetching users', (done) => {
    API.getUsers.mockReturnValue(Promise.resolve({data: TEST_USERS}));
    const expectedActions = [
      {
        type: UserActionTypes.GET_USERS,
      },
      {
        type: UserActionTypes.GET_USERS_SUCCESS,
        payload: TEST_USERS,
      },
    ];
    const store = mockStore({});

    return store.dispatch(getUsers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Should dispatch the correct actions when fetching users returns an API error', (done) => {
    const expectedError = {status: 400, message: 'Error fetching users'};
    API.getUsers.mockReturnValue(Promise.reject(expectedError));

    const expectedActions = [
      {
        type: UserActionTypes.GET_USERS,
      },
      {
        type: UserActionTypes.GET_USERS_ERROR,
        payload: expectedError,
      },
    ];
    const store = mockStore({});

    return store.dispatch(getUsers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
