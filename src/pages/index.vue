<template>
    <div>
      <!--导航栏-->
      <div class="navHeader">
        <div class="clear navHeader_content">
          <img src="../../static/img/logo.png" alt="" class="fl-left">
          <ul class="fl-right clear navHeader_list">
            <li class="active">资信门户</li>
            <li>数据分析</li>
          </ul>
        </div>
      </div>
      <!--搜索框-->
      <div class="po-relative">
        <img class="indexBg" src="../../static/img/index_bg.png" alt="">
        <div class="po-absolute search">
          <div>
            <input type="text" class="search_txt"><div class="search_btn" @click="search"><img src="../../static/img/search.png" alt=""></div>
          </div>
          <div class="search_link">
            最近搜索：
            <a v-for="(item,index) in searchList" :key="index">{{item}}</a>
          </div>
        </div>
      </div>
      <!--主内容-->
      <div class="index_content">
        <!--常用应用-->
        <p class="content_title">常用应用</p>
        <div class="moreUse">
          <ul class="moreUseList clear">
            <li v-for="(item,index) in useList" :key="index" >
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="index_content_all">
          <!--预警推送-->
          <div class="index_content_left">
            <p class="content_title">预警推送</p>
            <div class="warn_push">
              <div class="flex borderBottom warn_pushNav">
                <span v-for="(item,index) in warnNav" :key="index">{{item}}</span>
              </div>
              <ul class="warn_contentList">
                <li v-for="(item,index) in warnList" :key="index"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--登录-->
      <fixModel v-if="isLogin"></fixModel>
    </div>
</template>

<script>
  import fixModel from '@/components/login'
    export default {
        name: "index",
      components:{fixModel},
      data(){
          return{
            isLogin:false,
            searchList:['浙江国贸','浙江英特'],
            useList:[{img:require('../../static/img/use_icon.png'),name:'用户管理'}],
            warnNav:['企查查','中诚信','站内信','集团公示'],
            warnList:[],
          }
      },
      methods:{
        search(){
          var _this = this
          if(_this.isLogin == false){
            _this.isLogin = true
          }
        }
      }
    }
</script>

<style scoped>
  .navHeader{
    width: 100%;
    height: 60px;
    background: #fff;
  }
  .navHeader_content{
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
  }
  .navHeader_content img{
    height: 40px;
  }
  .navHeader_list li{
    float: left;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 20px;
  }
  .navHeader_list li.active{
    background: #617be3;
    color: #fff;
  }
  .indexBg{
    width: 100%;
    height: auto;
  }
  .search{
    width: 50%;
    top: 40%;
    left: 25%;
    text-align: center;
  }
  .search_txt{
    width: 500px;
    height: 40px;
    border-radius: 20px;
    padding-left: 12px;
  }
  .search_btn{
    display: inline-block;
    width: 45px;
    height: 45px;
    background: #111d5e;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 20px;
    position: relative;
    top: -5px;
  }
  .search_btn img{
    width: 25px;
    margin-top: 10px;
  }
  .search_link{
    width: 500px;
    text-align: left;
    color: #fff;
    margin: 20px auto;
    font-size: 12px;
  }
  .search_link a{
    color: aqua;
    margin-left: 20px;
  }
  .index_content{
    width: 80%;
    margin: 20px auto;
  }
  .moreUse{
    width: 100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .content_title{
    border-left: 6px solid #617be3;
    padding-left: 5px;
    margin-bottom: 5px;
  }
  .moreUseList li{
    float: left;
    margin: 10px 50px;
    font-size: 12px;
  }
  .moreUseList li img{
    display: block;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  .index_content_all{
    width: 100%;
  }
  .index_content_left{
    width: 60%;
  }
  .warn_push{
    width: 100%;
    background: #fff;
  }
  .warn_pushNav{
    line-height: 50px;
  }
  .warn_pushNav span{
    display: inline-block;
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
  .warn_contentList{
    padding: 20px;
  }
  .warn_contentList li{
    border-top: 2px solid #617be3;
  }
  .warn_contentList li:nth-child(even){
    border-top: 2px solid #007892;
  }
</style>
