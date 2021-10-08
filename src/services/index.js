import axios from 'axios'


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});


// returns default axios config
export default instance