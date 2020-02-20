export const FETCH_LOGIN_PENDING = 'FETCH_LOGIN_PENDING';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';

function fetchLoginPending() {
  return {
    type: FETCH_LOGIN_PENDING
  }
}

function fetchLoginSuccess(user) {
  return {
    type: FETCH_LOGIN_SUCCESS,
    user: user
  }
}

function fetchLoginError(error) {
  return {
    type: FETCH_LOGIN_ERROR,
    error: error
  }
}