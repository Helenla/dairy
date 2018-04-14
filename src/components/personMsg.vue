<template>
    <div class="person">
        <mt-header fixed title="个人信息">
            <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right" @click="editMsg()">修改</mt-button>
        </mt-header>
        <div class="main">
            <ul v-for="item in items" :key="item.username">
                <li class="lis">
                    <span class="tag">用户名</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag type="danger" size="">{{item.username}}</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">性别</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag>{{item.sex}}</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">生日</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag>{{item.birth}}</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">个性签名</span>
                    <i class="el-icon-caret-right"></i>
                    <el-tag type="info">{{item.word}}</el-tag>
                </li>
            </ul>
            <mt-button type="danger" @click="outLogin()" size="large">退出登陆</mt-button>
        </div>
        <el-dialog title="修改信息" :visible.sync="visible" width="80%">
            <el-form ref="form" :model="form" label-width="60px">
                <el-form-item prop="form_name" label="用户名:">
                    <el-input v-model="name" :disabled="true">{{name}}</el-input>
                </el-form-item>
                <el-form-item prop="form_sex" label="性别:">
                    <el-input v-model="form.sex" placeholder="输入性别"></el-input>
                </el-form-item>
                <el-form-item prop="form_birth" label="生日:">
                    <el-input v-model="form.birth" placeholder="输入生日"></el-input>
                </el-form-item>
                <el-form-item prop="form_word" label="签名:">
                    <el-input v-model="form.word" placeholder="输入签名"></el-input>
                </el-form-item>
                <el-form-item label=" ">
                    <template slot-scope="scope">
                        <el-button type="success" @click="submitForm()">确定</el-button>
                        <el-button type="danger" @click="visible = false">取消</el-button>
                    </template>
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
                sex: '',
                birth: '',
                word: ''
            },
            items: null,
            item: '',
            name: ''
        };
    },
    created() {
        this.name = sessionStorage.getItem('users');
        this.getPersonMsg();
        console.log(this.items);
    },
    methods:{
        editMsg() {
            this.visible = true;
            console.log(this.items[0]);
            this.form.sex = this.items[0].sex;
            this.form.birth = this.items[0].birth;
            this.form.word = this.items[0].word;
        },
        outLogin() {
            MessageBox.confirm('是否要退出登陆？').then(action => {
                this.$store.state.token = null;
                this.$router.push({path: '/login'})
            }).catch(() => {});
        },
        // 获取数据
        getPersonMsg() {
            this.$api.getPersonMsg({username: this.name}).then(res => {
                console.log(res);
                this.items = res.data.data;
            })
        },
        // 修改个人信息
        submitForm() {
            this.form.username = this.name;
            console.log(this.form);
            if(this.form.sex != ''&&this.form.birth != ''&&this.form.word != ''){
                console.log(this.form.username)
                this.$api.updatePerson({
                    username: this.form.username,
                    sex: this.form.sex,
                    birth: this.form.birth,
                    word: this.form.word
                }).then(res => {
                    console.log(res);
                    if('1' == res.data){
                        this.$toast({message:'修改成功',position: 'bottom',duration:1000});
                        this.getPersonMsg();
                        this.visible = false;
                        this.form.sex = '';
                        this.form.birth = '';
                        this.form.word = '';
                    }
                })
            } else {
                this.$toast({message:'请输入完全',position: 'bottom',duration:1000});
            }

        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-header{
        height: 45px;
    }
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
                        border: 1px solid #ccc;
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
                bottom: 0px;
            }
        }
    }
</style>


