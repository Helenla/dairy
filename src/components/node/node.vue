<template>
  <div class="node">
      <i class="back" @click="backIndex()"></i>
      <i class="add" @click="addNode()"></i>
      <div class="">

      </div>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name: 'node',
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
    addNode() {

    }
  }
}
</script>
<style lang="scss" scoped>
    .node{
        position: fixed;
        top:0;left:0;
        height:100%;width: 100%;
        background-image: url('../../../images/bg17.jpg');
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
