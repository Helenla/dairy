<template>
    <div class="person">
        <mt-header fixed title="个人信息">
            <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right" @click="editMsg()">修改</mt-button>
        </mt-header>
        <h2>person Message</h2>
    </div>
</template>
<script>
export default {
  name:'person'
}
</script>
<style lang="scss" scoped>
    .person{}
    h2{
        display: inline-block;
        padding-top:20px;
    }
</style>


