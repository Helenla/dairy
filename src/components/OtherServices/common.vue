<template>
    <div class="common">
        <img class="common_bg" src="../../../images/bg04.jpg" alt="">
        <img class="back" @click="goBack()" src="../../../images/返回.png" alt="">
        <h2>每 日 常 识</h2>
        <div class="common_page">
            <p>
                <span v-for="item in items" :key="item.lis">{{item.main}}<br></span>
                <!-- 1、常吃宵夜，会得胃癌， 因为胃得不到休息。 <br>
                2、一个星期只能吃四颗蛋，吃太多，对身体不好。 <br>
                "lis" : 1,
    "main" : "1、常吃宵夜，会得胃癌， 因为胃得不到休息。 "
                3、鸡屁股含有致癌物，不要吃较好。 <br>
                4、饭后吃水果是错误的观念，应是饭前吃水果。 <br>
                5、女生月经来时，不要喝绿茶，反正茶类不要喝就对了，多吃可以补血的东西。 <br>
                6、喝豆浆时不要加鸡蛋及糖，也不要喝太多。 <br>
                7、空腹时不要吃蕃茄，最好饭后吃。 <br>
                8、早上醒来。先喝一杯水，预防结石。 <br>
                9、睡前三小时不要吃东西，会胖。 <br>
                10、少喝奶茶，因为高热量，高油，没有营养价值可言，长期饮用，易罹患高血压、糖尿病等疾病。 -->
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'common',
  data() {
      return {
          items: [],
          item: ''
      }
  },
  created() {
      this.$api.getCommon().then(res => {
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
.common{
    width: 100%;
    height: 100%;
    z-index: 999;
    .common_bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        z-index: -999;
    }
    h2{
        margin: 0;
        padding-bottom: 20px;
        text-align: center;
    }
    .common_page{
        width: 80%;
        height: auto;
        border-radius: 5px;
        background: #E6A23C;
        margin: auto;
        p{
            padding: 10px;
            margin: 0;
            span{
                display:inline-block;
                padding: 10px 5px;
                color: white;
            }
        }
        img{
            width: 20px;
            padding-top: 10px;
            padding-left: 10px; 
        }
    }
}
</style>

