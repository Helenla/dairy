import axios from 'axios';
import router from './router';
import vue from './main.js';
import { loadavg } from 'os';

const localapi = 'http://192.168.1.10:8081';

export default {
    axios,
    // --------------登陆注册------------
    // 注册
    registered(data) {
        return axios.post(`${localapi}/login/add`, data);
    },
    // 验证登陆
    checkUser(data) {
        return axios.post(`${localapi}/login/get`, data);
    },
    // -------------核心模块-------------
    // 获取日记
    getDairy(data) {
        return axios.post(`${localapi}/dairy/get`, data);
    },
    // 添加日记
    addDairy(data) {
        return axios.post(`${localapi}/dairy/add`, data);
    },
    // 删除日记
    delDairy(data) {
        return axios.post(`${localapi}/dairy/del`, data);
    },
    // 获取个人中心数据
    getPersonMsg(data) {
        return axios.post(`${localapi}/person/get`, data);
    },
    // 修改个人中心数据
    updatePerson(data) {
        return axios.post(`${localapi}/person/edit`, data);
    },
    // 获取便签数据
    getNodeMsg(data) {
        return axios.post(`${localapi}/node/get`, data);
    },
    // 添加便签
    addNodeMsg(data) {
        return axios.post(`${localapi}/node/add`, data);
    },

    // -----------扩展模块-------------
    // 获取笑话
    getJokes() {
        return axios.get(`${localapi}/other/getJoke`);
    },
    // 获取新闻
    getNews() {
        return axios.get(`${localapi}/other/getNews`);
    },
    // 获取小知识
    getCommon() {
        return axios.get(`${localapi}/other/getCommon`);
    },
    // 获取书籍
    getBook() {
        return axios.get(`${localapi}/other/getBook`);
    }
}