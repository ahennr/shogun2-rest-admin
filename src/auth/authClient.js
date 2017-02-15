import { AUTH_LOGIN } from 'admin-on-rest';
import {queryParameters} from '../shogun2restclient/fetch'

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:8080/momo/doLogin', {
            method: 'POST',
            body: queryParameters({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
        })
        return fetch(request)
            .then(response => {
              console.log(response)
                if (response.status < 200 || response.status >= 400) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                debugger
                localStorage.setItem('token', token)
            });
    }
    return Promise.resolve();
}
