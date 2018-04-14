<template>
  <div class="registered">
      <i class="loginMsg"></i>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名 :" prop="username">
            <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码 :" prop="password">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码 :" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱 :" prop="email">
            <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">完成</el-button>
            <el-button @click="$router.push({ path: 'login' })">返回</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    name:'registered',
    data() {
        // 验证表单
        var validateName = (rule, value, callback) => {
            if(value === ''){
                callback(new Error('请输入用户名'))
            } else if(!/^[\u4e00-\u9fa5a-zA-Z]{2,}$/.test(value)) {
                callback(new Error('请输入至少2位中文或字母'))
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if(!/^[0-9a-zA-Z]{5,15}$/.test(value)) {
                callback(new Error('请输入5-15位密码'));
            }
            callback();
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var validateEmail = (rule, value, callback) => {
            if(value === ''){
                callback(new Error('请再次输入email'))
            } else if (!/^[0-9a-zA-Z]+\@[0-9a-zA-Z]{2,8}\.com/.test(value)) {
                callback(new Error('请输入正确的email'))
            }
            callback();
        }
        return {
            ruleForm2: {
                username:'',
                password: '',
                checkPass: '',
                email:''
            },
            rules2: {
                username:[
                    { validator: validateName, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.registered({
                username: this.ruleForm2.username,
                password: this.ruleForm2.password,
                email: this.ruleForm2.email,
            }).then((res) => {
                console.log(res)
                if('1' == res.data){
                    this.$toast({message:'注册成功!!',duration:1000});
                    sessionStorage.setItem('token', true);
                    sessionStorage.setItem('users', this.ruleForm2.username);
                    setTimeout(()=>{
                        this.$router.push({path: '/index'});
                    },1000)
                } else {
                    this.$toast({message:'注册失败!!',position: 'bottom',duration:1000});
                    return false;
                }
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
<style lang="scss">
    .registered{
        height:100%;
        background-image: url('../../images/bg15.jpg');
        background-size:cover;
    }
    i.loginMsg{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        top:50px;
        display: inline-block;
        width: 130px;
        height:130px;
        background-image: url('../../images/人员信息.png');
        background-size: cover;
    }
    .demo-ruleForm.el-form{
        padding-top:200px; 
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
