import axios from 'axios'

const url  = "http://142.93.221.27:8000/api";

const baseURL = `${url}`;

export default axios.create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods':  'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Origin, Authorization',
      },
    withCredentials: false
});
