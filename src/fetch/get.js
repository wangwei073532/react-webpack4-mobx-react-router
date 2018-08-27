import 'whatwg-fetch'
import 'es6-promise'

export const get = (url) => {
    return fetch(url, {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
  });
}
