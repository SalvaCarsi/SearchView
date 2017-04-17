'use strict';

// TODO right now using axios for the http request because its quick to implement but we need to switch to whatwg-fetch in the future
import 'whatwg-fetch';

const backendURL = 'https://jsonplaceholder.typicode.com/';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function getRequest(path, params) {
  return fetch(`${backendURL}${path}`, {
      method: 'get'
    })
    .then(checkStatus)
    .then(parseJSON);
}

export default getRequest;

