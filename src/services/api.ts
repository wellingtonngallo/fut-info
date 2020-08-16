import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.football-data.org/v2/',   
    headers: { 'X-Auth-Token': 'f83d36be81394dd5a34725d993f20366'}
});

export default api;