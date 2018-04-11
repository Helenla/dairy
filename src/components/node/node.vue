<template>
    <div style="width:100%;height:100%;">
        <div class="addNode" v-show="isAdd">
            <div class="bg">
                <textarea class="text" cols="30" rows="10" v-model="node" placeholder="输入便签内容..."></textarea>
                <div>
                    <el-button type="danger" @click="closeAdd()">取消</el-button>
                    <el-button type="primary" @click="addNode()">添加</el-button>                    
                </div>
            </div>
        </div>
        <div class="node">
            <img class="bg" src="../../../images/bg17.jpg" alt="">
            <i class="back" @click="backIndex()"></i>
            <i class="add" @click="isAdd = true"></i>
            <span class="todoTime">{{time}}</span>
            <div class="node_main">
                <ul>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利今夜吃鸡大吉大利今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                    <li>
                        <span>今夜吃鸡大吉大利</span>
                        <h5>14:23</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name: 'node',
  data() {
      return {
          time: sessionStorage.getItem('date'),
          isAdd: false,
          node: ''
      }
  },
  methods: {
    backIndex() {
        MessageBox.confirm('是否返回首页？').then(action => {
            this.$router.push({path: '/index'})
        }).catch(() => {});
    },
    addNode() {
        if(this.node == ''){
            Toast({
                message: '无便签内容 无法提交',
                duration: 2000
            });
            return ;
        }
        MessageBox.confirm('确定添加？').then(action => {
            // 添加笔记接口
            this.isAdd = false;
            this.node = '';
        }).catch(() => {});
    },
    closeAdd() {
        MessageBox.confirm('确定取消？').then(action => {
            this.isAdd = false;
            this.node = '';
        }).catch(() => {});
    }
  }
}
</script>
<style lang="scss">
    .node{
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width: 100%;
        // z-index: -999;
        .todoTime{
            display: inline-block;
            padding:5px;
            margin-top: 15px;
            background: #c62c7a;
            border-radius: 5px;
            color:white;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .bg{
            width: 100%;
            height: 100%;
            position: fixed;
            top:0;
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
        .node_main{
            ul{
                list-style: none;
                padding: 0;
                margin: 40px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content:  space-around;
                align-content: flex-start;
                align-items: flex-start;
                li{
                    position: relative;
                    width: 60px;
                    background: #409EFF;
                    color:white;
                    padding: 5px;
                    margin-bottom: 5px;
                    border-radius: 5px;
                    font-size: 14px;
                    // 文字自动换行
                    word-break: break-all;
                    word-wrap : break-word ;
                    h5{
                        border-top: 1px solid white;
                        color: #E6A23C;
                        margin: 0;
                        text-align: right;
                    }
                }
            }
        }
    }
    .addNode{
        position: relative;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        .bg{
            position: absolute;
            left: 0;right: 0;bottom: 0;top: 0;
            margin: auto;
            width: 80%;
            height: 50%;
            // background: #E6A23C;
            border-radius: 5px;
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
