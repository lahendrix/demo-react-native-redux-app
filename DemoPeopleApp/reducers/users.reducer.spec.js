import {INITIAL_STATE} from './users.reducer';
import usersReducer from './users.reducer';
import {UserActionTypes} from '../actions/users.actions';
import {TEST_USERS} from '../__fixtures__/test-users';

describe('Users Reducer', () => {
  it('returns the correct initial state', () => {
    const state = usersReducer(undefined, {});
    expect(state).toBe(INITIAL_STATE);
  });

  it('Should return correct state for GET_USERS action', () => {
    const expected = {...INITIAL_STATE, loading: true};

    const actual = usersReducer(undefined, {
      type: UserActionTypes.GET_USERS,
    });
    expect(actual).toEqual(expected);
  });

  it('Should return correct state for GET_USERS_SUCCESS action', () => {
    const expected = {...INITIAL_STATE, users: TEST_USERS};

    const actual = usersReducer(
      {...INITIAL_STATE, loading: true},
      {
        type: UserActionTypes.GET_USERS_SUCCESS,
        payload: TEST_USERS,
      },
    );
    expect(actual).toEqual(expected);
  });
});
