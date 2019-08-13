const API = `http://104.168.234.244:5017/`;

export const post = data => {
  return fetch(API + 'trending', {
    body: JSON.stringify(data), // must match 'Content-Type' header
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  })
    .then(response => response.json())
}