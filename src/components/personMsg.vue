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
                    <span class="tag">lizhiyu</span>
                </li>
                <li class="lis">
                    <span class="tag">性别</span>
                    <span class="tag">
                        <el-radio v-model="radio" label="1">男</el-radio>
                        <el-radio v-model="radio" label="2">女</el-radio>
                    </span>
                </li>
                <li class="lis">
                    <span class="tag">生日</span>
                    <span class="tag">2017-11-12</span>
                </li>
                <li class="lis">
                    <span class="tag">爱好</span>
                    <el-tag>篮球</el-tag>
                </li>
                <li class="lis">
                    <span class="tag">个性签名</span>
                    <span class="txt">12312312312</span>
                </li>
            </ul>
            <mt-button type="danger" @click="outLogin()" size="large">退出登陆</mt-button>
        </div>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name:'person',
    data () {
        return {
            radio: '1'
        };
    },
  methods:{
      editMsg() {
          
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


