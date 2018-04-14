<template>
    <div class="book">
        <img class="book_bg" src="../../../images/bg06.jpg" alt="">
        <i class="back" @click="backIndex()"></i>
        <span class="book_time">{{time}}</span>
        <div class="main">
            <div class="main_book" v-for="date in bookDate" :key="date.title" v-if="date.type == '科学'">
                <i class="logo"></i>
                <h3>{{date.title}}</h3>
                <p>{{date.main}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
    name: 'book',
    data() {
        return {
            time: sessionStorage.getItem('date'),
            bookDate: '',
            date:'',
            title: '',
            type: [],
            mainbook: '',
        }
    },
    created() {
        this.$api.getBook().then(res => {
            console.log(res);
            this.bookDate = res.data.data;
        })
    },
    methods: {
        backIndex() {
            MessageBox.confirm('是否返回首页？').then(action => {
                this.$router.push({path: '/index'})
            }).catch(() => {});
        },
        // 搜索书籍
        seachBook(label) {
            console.log(label);
        }
    }
}
</script>
<style lang="scss" scoped>
    .book{
        position: absolute;
        top:0;left:0;
        height:100%;
        width: 100%;
        .book_bg{
            position: fixed;
            width: 100%;
            background-size: 100%;
            top:-60px;
            z-index: -1;
            height: 120%;
        }
        .book_time{
            position: absolute;
            top:15px;right:10px;
            display: inline-block;
            background-color: #c62c7a; 
            color:white;
            padding:5px 10px;
            border-radius: 5px;
        }
        .back{
            display: inline-block;
            margin: 10px;
            width: 40px;
            height: 40px;
            background-image: url('../../../images/返回.png');
            background-size: cover; 
        }
        .main_book{
            // color:#C0C4CC;
            margin:0px 20px;
            border-radius: 10px;
            // padding:10px;
            font-family: "幼圆";
            h3{
                margin:0px;
                text-align: center;
                margin-bottom: 10px;
            }
            p{
                margin: 0;
                padding-bottom: 40px;
            }
        }
    }
</style>
