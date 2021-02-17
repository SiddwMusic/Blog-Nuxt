import axios from 'axios'

const url  = "http://localhost:8000/api";

const baseURL = `${url}`;

export default axios.create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods':  'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers':  'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin'
      },
      proxyHeaders: false,
      credentials: false
});
