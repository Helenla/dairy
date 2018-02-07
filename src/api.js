import axios from 'axios';
import router from './router';
import vue from './main.js';
import { loadavg } from 'os';

const localapi = 'http://localhost:8080';

export default {
    axios,
    registered(data) {
        return axios.post(`${localapi}/login/add`, data);
    },
    checkUser(data) {
        return axios.post(`${localapi}/login/get`, data);
    },
    getJokes(data) {
        return axios.post(`${localapi}/other/getJoke`, data);
    },
    getNews(data) {
        return axios.post(`${localapi}/other/getNews`, data);
    },
    getCommon(data) {
        return axios.post(`${localapi}/other/getCommon`, data);
    },
    getBook(data) {
        return axios.post(`${localapi}/other/getBook`, data);
    }
}