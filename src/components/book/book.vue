<template>
  <div class="book">
      <i @click="backIndex()"></i>
      <div class="">

      </div>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
    name: 'book',
    data() {
        return {

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
        position: fixed;
        top:0;left:0;
        height:100%;width: 100%;
        background-image: url('../../../images/bg16.jpg');
        background-size: cover; 
        i{
            display: inline-block;
            margin: 10px;
            width: 40px;
            height: 40px;
            background-image: url('../../../images/返回.png');
            background-size: cover; 
        }
    }
</style>
