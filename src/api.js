import axios from 'axios';
import router from './router';
import vue from './main.js';
import { loadavg } from 'os';

const localapi = 'http://localhost:8080';

export default {
    axios,
    // 注册
    registered(data) {
        return axios.post(`${localapi}/login/add`, data);
    },
    // 验证登陆
    checkUser(data) {
        return axios.post(`${localapi}/login/get`, data);
    },
    // 获取日记
    getDairy(data) {
        return axios.post(`${localapi}/dairy/get`, data);
    },
    // 添加日记
    addDairy(data) {
        return axios.post(`${localapi}/dairy/add`, data);
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