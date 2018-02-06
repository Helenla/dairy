<template>
    <div class="book">
        <img class="book_bg" src="../../../images/bg06.jpg" alt="">
        <i class="back" @click="backIndex()"></i>
        <span class="book_time">{{time}}</span>
        <div class="main">
            <div class="main_book">
                <i class="logo"></i>
                <h3>title</h3>
                <p>2017年全国出生人口数量和人口出生率双双下降。国家统计局18日公布数据显示，2017年全年共出生人口1723万人，比2016年减少63万人。
                同时老龄化程度继续加大，60岁以上及65岁以上老人占总人口的比重都有明显上升。<br>
                出生人数减少去年是全面两孩政策实施的第二年。根据此前有关方面的判断，全面两孩的政策效果体现有滞后性，
                应该在2017年之后逐步显现，因此2017年出生人口数量会明显高于2016年。但从国家统计局公布的数据来看，2017年出生人口比2016年的1786万人减少了63万人。
                人口出生率也同样出现了下降。去年全国人口出生率为12.43‰，2016年这一数据为12.95‰。<br>
                   中国社会科学院人口与劳动经济研究所人口统计室主任王广州表示，2017年出生人口数量比2016年还要少，这主要是因为一孩出生数量下降幅度很大，如果不是全面两孩政策，出生规模下降幅度会更大。
                长期关注生育意愿与生育行为研究的社科院人口与劳动经济研究所研究员郑真真表示，2017年出现出生人口的下降说明，
                个人生育意愿和生育行为受到很多复杂因素的影响，包括经济能力、年龄、生育偏好等等，政策对生育行为的影响并没有原来预想得大。<br>
                  中国社会科学院人口与劳动经济研究所人口统计室主任王广州表示，2017年出生人口数量比2016年还要少，这主要是因为一孩出生数量下降幅度很大，如果不是全面两孩政策，出生规模下降幅度会更大。
                长期关注生育意愿与生育行为研究的社科院人口与劳动经济研究所研究员郑真真表示，2017年出现出生人口的下降说明，
                个人生育意愿和生育行为受到很多复杂因素的影响，包括经济能力、年龄、生育偏好等等，政策对生育行为的影响并没有原来预想得大。</p>
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
            time : sessionStorage.getItem('date'),
        }
    },
    methods: {
        backIndex() {
            MessageBox.confirm('是否返回首页？').then(action => {
                this.$router.push({path: '/index'})
            }).catch(() => {});
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
