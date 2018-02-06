<template>
    <div style="width:100%;height:100%;">
        <div class="dairy">
            <img class="dairy_bg" src="../../../images/bg01.jpg" alt="">
            <i class="back" @click="backIndex()"></i>
            <i class="add" @click="isAdd = true, minidairy = '', title = ''"></i>
            <div class="dairy_main">
                <ul>
                    <li>
                        <h4>title</h4>
                        <p>afusihfauihefluahweufhaliwuehfawuiehfiauwhefuwahff
                        aefhauwehfuahfluhailuwehfuiawuhef</p>
                        <h5>2018/11/11</h5>
                    </li>
                    <li>
                        <h4>title</h4>
                        <p>afusihfauihefluahweufhaliwuehfawuiehfiauwhefuwahff
                        aefhauwehfuahfluhailuwehfuiawuhef</p>
                        <h5>2018/11/10</h5>
                    </li>
                    <li>
                        <h4>title</h4>
                        <p>afusihfauihefluahweufhaliwuehfawuiehfiauwhefuwahff
                        aefhauwehfuahfluhailuwehfuiawuhef</p>
                        <h5>2018/11/9</h5>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="isAdd" class="addDairy">
            <div class="bg">
                <h3>输入日记</h3>
                <el-input v-model="title" placeholder="输入日记名称"></el-input>
                <textarea class="text" name="mini_dairy" cols="30" rows="10" v-model="minidairy"></textarea>
                <div>
                    <el-button type="danger" @click="closeAdd()">取消</el-button>
                    <el-button type="primary" @click="addDairy()">添加</el-button>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
    name: 'dairy',
    data() {
            return {
                isAdd: false,
                minidairy: '',
                title: '',
            }
    },
    methods: {
        backIndex() {
            MessageBox.confirm('是否返回首页？').then(action => {
                this.$router.push({path: '/index'})
            }).catch(() => {});
        },
        addDairy() {
            MessageBox.confirm('是否确定添加？').then(action => {
                if(this.title == '' || this.minidairy == ''){
                    Toast({
                        message:'添加内容不符合规则!',
                        duration:2000
                    })
                    return;
                }
                // 添加日记接口

                this.isAdd = false;
            }).catch(() => {});
        },
        closeAdd() {
            MessageBox.confirm('是否退出添加？').then(action => {
                this.isAdd = false;
            }).catch(() => {});
        }
    }
}  
</script>
<style lang="scss">
    .dairy{
        position: absolute;
        top:0;left:0;
        height: 100%;
        width: 100%;
        // z-index: -1;
        .dairy_bg{
            width: 100%;
            height: 100%;
            position: fixed;
            top:0;
            z-index: -999;
        }
        i{
            position: absolute;
            display: inline-block;
            width: 40px;
            height: 40px;           
        }
        .back{
            top:10px;left:10px;
            background-image: url('../../../images/返回.png');
            background-size: cover;
        }
        .add{
            top:10px;right:10px;
            background-image: url('../../../images/增加.png');
            background-size: cover;
        }
        .dairy_main{
            ul{
                list-style: none;
                padding: 40px 0;
                li{
                    margin: auto;
                    margin-bottom: 10px; 
                    background: #E6A23C;
                    border-radius: 5px;
                    width: 70%;
                    padding: 10px;
                    // 文字自动换行
                    word-break: break-all;
                    word-wrap : break-word ;
                    h4{
                        margin: 0;
                        text-align: center;
                    }
                    h5{
                        margin: 0;
                        text-align: right;
                    }
                    p{
                        margin: 0;
                    }
                }
            }
        }
    }
    .addDairy{
        z-index: 99;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        position: relative;
        .bg{
            position: absolute;
            left: 0;right: 0;bottom: 0;top: 0;
            margin: auto;
            width: 80%;
            height: 85%;
            background: #E6A23C;
            border-radius: 5px;
            .closeAdd{
                position: absolute;
                right: 5px;
                top: 5px;
            }
            h3{
                margin: 0;
                color:white;
                text-align: center;
                padding: 15px;
            }
            .text{
                color:white;
                padding: 10px;
                width: 92.8%;
                height: 70%;
                border-radius: 5px;
                background: url('../../../images/bg15.jpg') no-repeat;
                background-size: 100% 100%;
            }
            div{
                text-align: center;
            }
        }
    }
</style>
