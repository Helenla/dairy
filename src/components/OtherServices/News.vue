<template>
    <div class="news">
        <img class="news_bg" src="../../../images/bg04.jpg" alt="">
        <img class="back" @click="goBack()" src="../../../images/返回.png" alt="">
        <h2>今 日 新 闻</h2>
        <div class="news_page" v-for="item in items" :key="item.lis">
            <h4>&nbsp;&nbsp;{{item.title}}</h4>
            <p>{{item.main}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'news',
    data() {
        return {
            items: '',
            item: ''
        }
    },
    created() {
        this.$api.getNews().then(res => {
            console.log(res);
            this.items = res.data.data;
        })
    },
    methods: {
        goBack() {
            this.$router.push({path: '/index'});
        }
    }
}
</script>
<style lang="scss">
.back{
    width: 40px;
    // margin: 10px;
}
.news{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 999;
    .news_bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        z-index: -999;
    }
    h2{
        margin: 0;
        text-align: center;
        padding-bottom: 20px;
    }
    .news_page{
        width: 80%;
        height: auto;
        border-radius: 5px;
        background: #ccc;
        margin: auto;
        margin-bottom: 20px;
        h4{
            padding: 10px;
            margin: 0;
        }
        p{
            padding: 10px;
            margin: 0;
        }
        img{
            width: 20px;
            padding-top: 10px;
            padding-left: 10px; 
        }
    }
}
</style>

