import {Action} from 'redux';
import {UserActionTypes} from '../actions/users.actions';
import {IUser} from '../interfaces/IUser';

export interface IUsersState {
  loading: boolean;
  users: IUser[];
  error: any;
}
export const INITIAL_STATE: IUsersState = {
  loading: false,
  users: [],
  error: null,
};

export default (state: IUsersState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {...state, loading: true};
    default:
      return state;
  }
};
