<template>
    <div class="news">
        <img class="news_bg" src="../../../images/bg04.jpg" alt="">
        <img class="back" @click="goBack()" src="../../../images/返回.png" alt="">
        <h2>今 日 新 闻</h2>
        <div class="news_page">
            <h4>&nbsp;&nbsp;美国14岁华裔生开发app 帮助失智患者记起亲人</h4>
            <p>
                中国侨网2月5日电 据美国《世界日报》报道，年仅14岁的纽约曼哈顿博莱利学校(The Brearley School)九年级学生杨君熙(Emma Yang)，
            因为小时候曾看到奶奶罹患阿兹海默症的经历，两年前着手开发应用程序(App)Timeless，希望通过人工智能技术，帮助阿兹海默症患者记起自己亲人。<br>
            杨君熙表示，她七岁时，奶奶患了阿兹海默症，逐渐开始健忘，接下来的几年里，奶奶的记忆力每况愈下，因此她决定能够开发App帮助奶奶，随时提醒她亲人是谁。<br>
            四年前，杨君熙随父母从香港来到美国，并逐渐对编程越来越有热情。2016年，她利用课余时间正式研发Timeless，除了初始的设计，还用编程建原型。之后，随着项目发展，
            她还与用户界面和程序员远程合作，共同推进项目。此外，Timeless还获得了阿兹海默症专家Melissa Kramps博士，以及人工智能脸部识别领域的初创公司Kairo支持。<br>
            通过杨君熙设计的软件，阿兹海默症患者可以查看家人和朋友的照片，软件会告诉他们图片中的人是谁。另外，患者还可以通过拍照，软件会自动通过脸部识别告诉患者对面的人是谁。<br>
            杨君熙说，“我平时全天上学，只能利用课余时间开发软件，如今Timeless已经进行到第二版设计。”<br>
            为了让APP能够在2018年年底正式上线，杨君熙希望与专业程序员合作，尽快将软件开发出来。为此，她在筹款网站indiegogo上发布筹款活动，
            希望能够筹得5万美元，用于软件开发，在2018年底让软件正式上线。(陈小宁)
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'news',
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

