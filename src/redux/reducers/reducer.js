import ActionType from '../actionType';

import { REHYDRATE } from 'redux-persist/src/constants';

const reducerInitialState = {
  authToken: null,
  userInfo: null
};

const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case ActionType.storeAuthToken:
      return Object.assign({}, state, { authToken: action.data });
    case ActionType.storeUserInfo:
      return Object.assign({}, state, { userInfo: action.data });
    case REHYDRATE:
      return { ...state, ...reducerInitialState };
    default:
      return state;
  }
};

export {
  reducer,
  reducerInitialState
}

