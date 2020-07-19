<template>
    <div class="po-fixed fixedBg">
      <div class="loginModel">
        <ul>
          <li><label>用户名：</label><input type="text" placeholder="请输入用户名" v-model="loginForm.username"></li>
          <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input type="password" placeholder="请输入密码" v-model="loginForm.password"></li>
        </ul>
        <div class="loginBtn" @click="joinIN">登录</div>
        <div class="loginClose" @click="del">取消</div>
      </div>
    </div>
</template>

<script>
  //import { mapMutations } from 'vuex';
  import axios from 'axios';
    export default {
      name: "login",
      data(){
          return{
            loginForm:{
              username:'',
              password:''
            },
            userToken:''
          }
      },
      methods:{
        //...mapMutations(['changeLogin']),
        joinIN(){
          var _this= this;
          if (_this.username == '' || _this.password == '') {
            alert('账号或密码不能为空');
          } else {
            axios.post(_this.$api.login,_this.loginForm).then(res => {
              if (res.status == 200) {
                //_this.userToken = 'Bearer ' + res.data.data.body.token;
                // 将用户token保存到vuex中
                //_this.changeLogin({ Authorization: _this.userToken });
                //_this.$router.push('/');
                if(res.data.token){
                  //存储cookie值
                  var millisecond = new Date().getTime();
                  var expiresTime = new Date(millisecond + 60 * 1000 * 30);
                  _this.$cookies.set("token",res.data.token, {expires: expiresTime ,path:"/"});
                  alert('登录成功');
                  setTimeout(function(){
                    this.$cookies.set("token", '');
                    this.$cookies.remove("token");
                    alert('登录失效，请重新登录');
                  },30000)
                  _this.$parent.isLoginModel = false
                  window.location.reload()
                }
              }
            }).catch(err=>{
              console.log(err);
            });
          }
        },
        del(){
          var _this= this;
          _this.$parent.isLoginModel = false
        }
      }
    }
</script>

<style scoped>
  .loginModel{
    width: 400px;
    padding: 50px 30px;
    background: #fff;
    margin: 300px auto;
    text-align: center;
  }
  .loginModel ul li{
    margin-bottom: 30px;
  }
  .loginModel ul li input{
    width: 250px;
    height: 35px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    margin-left: 5px;
    padding-left: 12px;
  }
  .loginBtn{
    width: 100%;
    text-align: center;
    line-height: 35px;
    background: #617be3;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }
  .loginClose{
    width: 100%;
    text-align: center;
    line-height: 35px;
    background: #d3d3d3;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
