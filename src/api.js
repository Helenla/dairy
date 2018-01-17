import axios from 'axios';
import router from './router';
import vue from './main.js';

const localapi = 'http://localhost:8080'

export default {
    axios,
    registered(data) {
        return axios.post(`${localapi}/login/add`, data)
    },
    checkUser(data) {
        return axios.post(`${localapi}/login/get`, data)
    }
}