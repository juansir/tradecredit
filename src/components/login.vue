<template>
    <div class="po-fixed fixedBg">
      <div class="loginModel">
        <ul>
          <li><label>用户名：</label><input type="text" placeholder="请输入用户名"></li>
          <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input type="password" placeholder="请输入密码"></li>
        </ul>
        <div class="loginBtn">登录</div>
        <div class="loginClose" @click="del">取消</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      methods:{
        del(){
          var _this= this;
          _this.$parent.isLogin = false
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
