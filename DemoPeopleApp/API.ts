import {TEST_USERS} from './__fixtures__/test-users';
import axios, {AxiosResponse} from 'axios';
import {IUser} from './interfaces/IUser';

export default {
  getUsers: (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  },
};
