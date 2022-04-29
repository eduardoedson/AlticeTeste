import axios from 'axios';

const Api = axios.create({ baseURL: 'https://altice-backend.herokuapp.com/' });

export default Api;