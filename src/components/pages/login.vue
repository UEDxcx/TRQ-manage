<template>
  <div class="login_wrap">
    <div class="login_in">
        <div class="left-img">
            <img src="../../assets/word100.png" alt="">
        </div>
        <div class="right-form">
            <template>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" >
                    <FormItem prop="user" label="用户名">
                        <Input type="text" v-model="formInline.user"></Input>
                    </FormItem>
                    <FormItem prop="password" label="密码">
                        <Input type="password" v-model="formInline.password"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>
                </Form>
            </template>
        </div>
    </div>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, trigger: 'blur' }
          ]
        }
      }
  },
  methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            localStorage.setItem('ms_username', this.formInline.user);
            this.$router.push('/home');
            console.log("1242353");
          } else {
            this.$Message.error('Fail!');
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
.login_wrap{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/word100_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login_in{
    width: 760px;
    height: 440px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: -220px;
    margin-left: -380px;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.right-form{
    box-sizing: border-box;
    width: 460px;
    height: 440px;
    padding: 50px 72px 36px;
}
Form{
    height: 100%;
}
</style>
