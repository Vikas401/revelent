import axios from 'axios';

export default axios.create({
    baseURL:  'https://revent-json-server.herokuapp.com'
});