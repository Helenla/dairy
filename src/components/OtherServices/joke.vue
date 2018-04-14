<template>
    <div class="joke">
        <img class="joke_bg" src="../../../images/bg04.jpg" alt="">
        <img class="back" @click="goBack()" src="../../../images/返回.png" alt="">
        <h2>每 日 一 笑</h2>
        <div class="joke_page">
            <img src="../../../images/笑哭.png" alt="">
            <p>
                乌龟正在河里洗澡被癞蛤蟆看见了，<br>
            　　乌龟：没见过像我这样的美女吗？看你眼珠子都快要蹦出来了。<br>
            　　癞蛤蟆：妹，你就别逗我了，没有看见我身上已经起鸡皮疙瘩了吗？
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'joke',
  data() {
      return {
          items: '',
          item: ''
      }
  },
  created() {
      this.$api.getJoke().then(res => {
          console.log(res)
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
.joke{
    width: 100%;
    height: 100%;
    z-index: 999;
    .joke_bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        z-index: -999;
    }
    h2{
        margin: 0;
        padding: 32px;
        text-align: center;
    }
    .joke_page{
        width: 60%;
        height: auto;
        border-radius: 5px;
        background: lightblue;
        margin: auto;
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

