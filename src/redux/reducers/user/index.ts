import * as types from './types';

const initialState = {
  user: 'Igor Rezende - NOT LOGGED',
  email: 'Igor@email.com - NOT LOGGED',
  loading: false,
  error: null
};

export type State = {
  user: string | null;
  email: string | null;
  loading: boolean;
  error: string | null;
};

type Action = {
  type: string;
  payload: State;
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.USER_LOGIN_PENDING:
      return {
        state,
        ...action.payload
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case types.USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.USER_LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
