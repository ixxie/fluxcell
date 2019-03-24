function getFullEndpoint(endpoint, query) {
  const param = query ? `api/${endpoint}?q=${query}` : `api/${endpoint}`;
  const host = process.env.REACT_APP_HOST;
  const port = process.env.REACT_APP_SERVER_PORT;
  return `${host}:${port}/${param}`;
}
function get(endpoint, query) {
  const fullEndpoint = getFullEndpoint(endpoint, query);
  console.log('fullendpoint', fullEndpoint);

  return fetch(fullEndpoint, {
    accept: 'application/json',
    'Content-Type': 'application/json',
    cors: true,
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => console.log(err));
}

function post(endpoint, body) {
  const fullEndpoint = getFullEndpoint(endpoint);
  return fetch(fullEndpoint, {
    method: 'POST',
    cors: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => console.log(err));
}

function checkStatus(response) {
  console.log('checkstatus', response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { get, post };
export default Client;
