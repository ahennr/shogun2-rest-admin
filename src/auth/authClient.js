import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';

import { Promise } from 'es6-promise';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem('username', username);
        // accept all username/password combinations
    //debugger;
    return Promise.resolve();
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
  }
  return Promise.reject('Unkown method');
};
