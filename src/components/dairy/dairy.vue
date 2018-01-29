<template>
  <div class="dairy">
      <i class="back" @click="backIndex()"></i>
      <i class="add" @click="addDairy()"></i>
      <div class="">

      </div>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name: 'dairy',
  data() {
      return {

      }
  },
  methods: {
    backIndex() {
        MessageBox.confirm('是否返回首页？').then(action => {
            this.$router.push({path: '/index'})
        }).catch(() => {});
    },
    addDairy() {
      
    }
  }
}  
</script>
<style lang="scss" scoped>
    .dairy{
        position: fixed;
        top:0;left:0;
        height:100%;width: 100%;
        background-image: url('../../../images/bg01.jpg ');
        background-size: cover; 
        i{
            position: fixed;
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
    }
</style>
