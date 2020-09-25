import {Dispatch} from 'redux';
import API from '../API';
import {IUser} from '../interfaces/IUser';

export const UserActionTypes = {
  GET_USERS: 'GET_USERS',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCES',
  GET_USERS_ERROR: 'GET_USERS_ERROR',
};

const requestGetUsers = () => {
  return {
    type: UserActionTypes.GET_USERS,
  };
};

const getUsersSuccess = (payload: IUser[]) => {
  return {
    type: UserActionTypes.GET_USERS_SUCCESS,
    payload,
  };
};

const getUsersError = (payload: any) => {
  return {
    type: UserActionTypes.GET_USERS_ERROR,
    payload,
  };
};

const getUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestGetUsers());
    try {
      const response = await API.getUsers();
      return dispatch(getUsersSuccess(response));
    } catch (err) {
      dispatch(getUsersError(err));
    }
  };
};

export {getUsers};
