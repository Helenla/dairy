<template>
    <div class="dairy">
        <mt-header fixed title="mini日记">
            <mt-button slot="left" icon="back" @click="clickBack()">退出</mt-button>
            <mt-button icon="more" slot="right" @click="handleClick()"></mt-button>
        </mt-header>
        <!-- banner -->
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 3" :key="item">
            </el-carousel-item>
        </el-carousel>
        <!-- more -->
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>
        <ul class="navs">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    name:'dairy',
    data() {
        return {
            actions: [{
                    name: '拍照',
                    method: () => {
                        this.$toast({message:'拍照',duration:1000})
                    }
                },{
                    name: '个人信息',
                    method: () => {
                        this.$router.push({path: './person'})
                    }
                },{
                    name: '关于app',
                    method: () => {
                        this.$toast({message:'关于app',duration:1000})
                    }
                }
            ],
            sheetVisible:false
        }
    },
    methods:{
        clickBack() {
            MessageBox.confirm('确定执行此操作?').then(action => {
                this.$router.push({path: './login'})
            }).catch(e => {});
        },
        handleClick() {
            this.sheetVisible = true
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-carousel{
        padding-top: 40px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0px;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
