import * as types from './types';

export type User = {
  user: string | null;
  email: string | null;
};

export const userLoginAction = ({ user, email }: User) => ({
  type: types.USER_LOGIN_PENDING,
  payload: { user, email, loading: true, error: null }
});

export const userLoginSuccessAction = ({ user, email }: User) => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: { user, email, loading: false, error: null }
});

export const userLoginFailedAction = (error: string) => ({
  type: types.USER_LOGIN_FAILED,
  payload: { user: null, email: null, loading: false, error }
});

export const userLogoutAction = () => ({
  type: types.USER_LOGOUT,
  payload: { user: null, email: null, loading: false, error: null }
});
