<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="$router.push({ path: 'Registered' })">注册</el-button>
        </el-form-item>
        
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </el-form>
  </div>
</template>
<script>
export default {
    name:'login',
    data() {
        // 验证表单
      var validateName = (rule, value, callback) => {
          if(value === ''){
              callback(new Error('请输入用户名'))
          } 
          callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
          callback();
      };
        return {
            ruleForm: {
                username:'',
                pass: ''
            },
            rules: {
                username:[
                    { validator: validateName, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$api.checkUser({
                    
                }).then((res) => {
                    this.$toast({message:'登陆成功!!',duration:1000});
                    setTimeout(()=>{
                        this.$router.push({path: '/index'});
                    },1000)
                })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="scss" scoped>
    .el-form{
        padding-top:200px; 
        text-align: center;
        .el-input{
            width: 80%;
        }
        .el-form-item__content{
            margin-left: 0px !important;
        }
        .el-form-item__error{
            left:50%;
            transform: translateX(-50%);
        }
    }
</style>
