<template>
    <div class="person">
        <mt-header fixed title="个人信息">
            <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right" @click="editMsg()">修改</mt-button>
        </mt-header>
        <div class="main">
            <ul>
                <li class="lis">
                    <span class="tag">用户名</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag type="danger" size="">lizhiyu</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">性别</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag>男</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">生日</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag>2017-11-12</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">爱好</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag type="warning">篮球</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">个性签名</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag type="info">2017-11-12日开始</el-tag>
                </li>
            </ul>
            <mt-button type="danger" @click="outLogin()" size="large">退出登陆</mt-button>
        </div>
        <el-dialog title="Dialog" :visible.sync="visible" width="80%">
            <el-form ref="form" :model="form" label-width="60px">
                <el-form-item label="用户名:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="爱好:">
                    <el-input v-model="form.hobbits"></el-input>
                </el-form-item>
                <el-form-item label="签名:">
                    <el-input v-model="form.word"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name:'person',
    data () {
        return {
            radio: '1',
            visible: false,
            form: {
                name: '',
                password: '',
                hobbits: '',
                word: '',
            }
        };
    },
  methods:{
        editMsg() {
            this.visible = true;
        },
        outLogin() {
            MessageBox.confirm('是否要退出登陆？').then(action => {
                this.$store.state.token = null;
                this.$router.push({path: '/login'})
            }).catch(() => {});
        }
    }
}
</script>
<style lang="scss" scoped>
    .person{
        height: 100%;
        background-image: url('../../images/bg07.jpg');
        background-size:cover;
        .main{
            padding-top: 40px;
            ul{
                padding: 0;
                .lis{
                    background-color: #eee;
                    border-radius: 10px;
                    list-style: none;
                    margin: 5px 20px;
                    padding:10px 20px;
                    .tag{
                        display: inline-block;
                        padding:5px;
                        border-radius: 5px;
                        background-color: #ccc;
                    }
                    .txt{
                        display: inline-block;
                        padding:5px;
                        border:1px solid #aaa;
                        border-radius: 5px;
                        background-color: white;
                    }
                }
            }
            .mint-button--large{
                width: 100%;
                position: absolute;
                bottom:60px;
            }
        }
    }
</style>


