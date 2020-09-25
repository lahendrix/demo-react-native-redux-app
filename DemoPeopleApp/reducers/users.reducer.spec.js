import {INITIAL_STATE} from './users.reducer';
import usersReducer from './users.reducer';
import {UserActionTypes} from '../actions/users.actions';

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
});
