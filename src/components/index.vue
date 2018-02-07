<template>
    <div class="index">
        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="always" class="banner">
            <el-carousel-item>
                <img @click="goNews()" src="../../images/news.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img @click="goCommon()" src="../../images/常识.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img @click="goJoke()" src="../../images/笑话.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
        <!-- 功能 -->
        <div class="main">
            <ul class="navs">
                <li class="dairy_logo">
                    <img @click="goDairy()" src="../../images/笔记.png" alt="">
                </li><!-- 
                --><li class="node_logo">
                    <img @click="goNode()" src="../../images/书签.png" alt="">
                </li><!-- 
                --><li class="dairy_logo">
                    <img @click="goBook()" src="../../images/书.png" alt="">
                </li><!-- 
                --><li class="node_logo">
                    <img @click="goPerson()" src="../../images/个人中心.png" alt="">
                    <!-- <img  @click="goPerson()" src="../../images/个人中心.png" alt="">
                    <img @click="goPerson()" src="../../images/个人中心.png" alt=""> -->
                </li>
            </ul>
        </div>
        <el-tag v-if="isHasUser" type="danger" class="users">{{this.users}}</el-tag>
    </div>

</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {  
    name:'dairy', 
    data() {
        return {
            users:'',
            isHasUser:false,
            time : new Date().toLocaleDateString(),
        }
    },
    created(){
        // this.$message('这是一条消息提示');
        this.users = sessionStorage.getItem('users');
        if(this.users){
            this.isHasUser = true;
        }
        sessionStorage.setItem('date', this.time)
        // console.log(this.users)
    },
    methods:{
        clickBack() {
            MessageBox.confirm('确定执行此操作?').then(action => {
                this.$router.push({path: '/login'})
            }).catch(e => {});
        },
        handleClick() {
            this.sheetVisible = true
        },
        // 以下跳转页面
        goJoke() {
            this.$router.push({path: '/joke'});
        },
        goNews() {
            this.$router.push({path: '/news'});
        },
        goCommon() {
            this.$router.push({path: '/common'});
        },
        goLogin() {
            this.$router.push({path: '/login'});
        },
        goDairy() {
            if(sessionStorage.getItem('token')){
                Toast({
                    message: '欢迎进入日记本',
                    position: 'bottom',
                    duration: 1000
                });
                setTimeout(()=>{
                    this.$router.push({path: '/dairy'});
                },1000)
                
            }else{
                MessageBox.confirm('还未登陆无法打开，是否去登陆？').then(action => {
                    this.$router.push({path: '/login'});
                }).catch(() => {});
            }
        },
        goBook() {
            Toast({
                message: '欢迎进入文摘',
                position: 'bottom',
                duration: 1000
            });
            setTimeout(()=>{
                this.$router.push({path: '/book'});
            },1000)            
        },
        goNode() {
            Toast({
                message: '欢迎进入便签',
                position: 'bottom',
                duration: 1000
            });
            setTimeout(()=>{
                this.$router.push({path: '/node'});
            },1000)
        },
        goPerson() {
             if(sessionStorage.getItem('token')){
                Toast({
                    message: '进入个人中心',
                    position: 'bottom',
                    duration: 1000
                });
                setTimeout(()=>{
                    this.$router.push({path: '/person'});
                },1000)
            }else{
                MessageBox.confirm('还未登陆无法打开，是否去登陆？').then(action => {
                    this.$router.push({path: '/login'});
                }).catch(() => {});
            }           
        }
    }
}
</script>
<style lang="scss" scoped>
    .index{
        height: 100%;
        background-image: url('../../images/bg07.jpg');
        background-size:cover;
    }
    .banner{
        .el-carousel__item{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .navs{

        height:200px;
        width: 200px;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li{
            width: 80px;
            height:80px;
            background-color: #409EFF;
            border-radius: 8px;
            img{
                width: 60px;
                height: 60px;
                padding:10px 10px;
            }
        }
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0px;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .users{
        position: absolute;
        // top:310px;
        bottom: 80px;
        left:50%;
        transform: translateX(-50%);
        z-index: 999;
    }
</style>
