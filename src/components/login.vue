<template>
  <div class="login">
    <i class="loginImg"></i>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-ruleForm">
        <el-form-item label="用户名 :" prop="username">
            <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码 :" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitUser()">登陆</el-button>
            <el-button @click="$router.push({ path: 'Registered' })">注册</el-button>
        </el-form-item>
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
                password: ''
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
      submitUser() {
            sessionStorage.setItem('users', this.ruleForm.username);// 把users存入sessionStorage
            if(this.ruleForm.username != ''&&this.ruleForm.password != ''){
                this.$api.checkUser({
                    username: this.ruleForm.username,
                    password: this.ruleForm.password
                }).then((res) => {
                    console.log(res)
                    if(res.data == []){
                        this.$toast({message:'登陆失败',position: 'bottom',duration:1000});
                        return ;
                    } else {
                        this.$toast({message:'登陆成功',position: 'bottom',duration:1000});
                        // this.$store.state.token = true;
                        sessionStorage.setItem('token', true);
                        setTimeout(()=>{
                            this.$router.push({path: '/index'});
                        },1000)
                    }
                }).catch(() => {
                    this.$toast({message:'登陆失败',position: 'bottom',duration:1000});
                    return ;
                })
            } else {
                this.$toast({message:'请输入账号',position: 'bottom',duration:1000});
                return ;
            }
        } 
      }
}
</script>
<style lang="scss">
    .login{
        height:100%;
        background-image: url('../../images/bg15.jpg');
        background-size:cover;
    }
    i.loginImg{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        top:80px;
        display: inline-block;
        width: 100px;
        height:100px;
        background-image: url('../../images/登陆.png');
        background-size: cover;
    }
    .el-form.login-ruleForm{
        padding-top:230px; 
        text-align: center;
        .el-input{
            width: 60%;
        }
        .el-form-item__content{
            margin-left: 0px !important;
        }
        .el-form-item__error{
            left:50%;
            transform: translateX(-50%);
        }
        .el-form-item__label{
            font-weight: bolder;
            font-size: 20;
            color: #D4237A;
        }
        .el-button--primary{
            background-color: #D4237A;
        }
    }
</style>
