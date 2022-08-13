import axios from 'axios';

const call = {};
const once = (config = {}, requestType = '') => {
  if (call[requestType]) {
    call[requestType].cancel('Only one request allowed at a time. Cancelling first.');
  }

  call[requestType] = axios.CancelToken.source();
  config.cancelToken = call[requestType].token;

  return axios(config);
};

async function doRequest(url, payload, method, destination) {
  const destUrl = process.env.REACT_APP_BASE_URL;

  const config = {
    url: destUrl + url,
    method,
    headers: {
      'locale': localStorage.getItem('locale') || 'en_GB',
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': '*',
    },
    data: payload
  };

  try {
    const response = await once(config, config.url);

    if (response && response.headers['API-Version']) localStorage.setItem('xturf', response.headers['API-Version']);
    if (response && response.headers['Server-Version']) localStorage.setItem('server', response.headers['Server-Version']);

    return response;
  } catch (error) {
    const { response } = error;

    if (response && response.headers['API-Version']) localStorage.setItem('xturf', response.headers['API-Version']);
    if (response && response.headers['Server-Version']) localStorage.setItem('server', response.headers['Server-Version']);

    return response;
  }
}

export async function post(url, payload, destination = null) {
  const response = await doRequest(url, payload, 'post', destination);
  return response;
}

export async function put(url, payload, destination = null) {
  const response = await doRequest(url, payload, 'put', destination);
  return response;
}

export async function get(url, destination = null) {
  const response = await doRequest(url, {}, 'get', destination);
  return response;
}
