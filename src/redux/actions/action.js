import ActionType from '../actionType';
import {
  reducerInitialState
} from '../reducers/reducer';

// Third Party
import { REHYDRATE } from 'redux-persist/src/constants';


const storeAuthToken = (token) => ({ type: ActionType.storeAuthToken, data: token });
const storeUserInfo = (userInfo) => ({ type: ActionType.storeUserInfo, data: userInfo });
const logout = () => ({ type: REHYDRATE, payload: reducerInitialState });

export default {
  storeAuthToken,
  storeUserInfo,
  logout
}
