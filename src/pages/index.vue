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
      <div class="index_content" v-if="isLogin">
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
        <div class="index_content_all flex">
          <!--预警推送-->
          <div class="index_content_left">
            <p class="content_title">预警推送</p>
            <div class="warn_push">
              <div class="flex borderBottom warn_pushNav">
                <span v-for="(item,index) in warnNav" :key="index">{{item}}</span>
              </div>
              <ul class="warn_contentList">
                <li v-for="(item,index) in warnList" :key="index">
                  <div class="clear blod">
                    <div class="fl-left">{{item.title}}</div>
                    <div class="fl-right">{{item.level}}</div>
                  </div>
                  <p>{{item.content}}</p>
                  <div class="clear">
                    <span class="fl-left">风险推送人：{{item.user}}</span>
                    <span class="fl-right">推送时间：{{item.time}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--消息中心-->
          <div class="index_content_right">
            <p class="content_title">消息中心</p>
            <div class="warn_push">
              <div class="flex borderBottom warn_pushNav">
                <span v-for="(item,index) in newsNav" :key="index">{{item}}</span>
              </div>
              <ul class="newsList">
                <li v-for="(item,index) in newsMore" :key="index">
                  <img src="../../static/img/notice.png" alt="">
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--登录-->
      <fixModel v-if="isLoginModel"></fixModel>
    </div>
</template>

<script>
  import fixModel from '@/components/login'
    export default {
        name: "index",
      components:{fixModel},
      data(){
          return{
            isLogin:true,
            isLoginModel:false,
            searchList:['浙江国贸','浙江英特'],
            useList:[
              {img:require('../../static/img/use_icon01.png'),name:'黑名单申报'},
              {img:require('../../static/img/use_icon02.png'),name:'黑名单审批'},
              {img:require('../../static/img/use_icon03.png'),name:'站内信'},
              {img:require('../../static/img/use_icon04.png'),name:'关注清单'},
              {img:require('../../static/img/use_icon05.png'),name:'用户管理'},
            ],
            warnNav:['企查查','中诚信','站内信','集团公示'],
            warnList:[{title:'XXX有限公司',level:'2级',content:'鉴于国内猪肉价格上涨',user:'XXX',time:'2020-05-19'},
              {title:'XXX有限公司',level:'2级',content:'鉴于国内猪肉价格上涨',user:'XXX',time:'2020-05-19'}
            ],
            newsNav:['关注清单','灰名单','黑名单'],
            newsMore:['浙江英特集团有限公司','浙江新宏洲贸易有限公司'],
          }
      },
      methods:{
        search(){
          var _this = this
          if(_this.isLoginModel == false){
            _this.isLoginModel = true
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
    border-radius: 20px;
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
    text-align: center;
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
    padding: 10px;
    border: 1px solid #e3e3e3;
    border-top: 2px solid #617be3;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .warn_contentList li:last-child{
    margin-bottom: 0;
  }
  .warn_contentList li:nth-child(even){
    border-top: 2px solid #007892;
  }
  .warn_contentList li p{
    color: #999;
    margin: 5px 0;
  }
  .warn_contentList li span{
    color: #617be3;
  }
  .index_content_right{
    width: 38%;
  }
  .newsList{
    padding: 20px;
  }
  .newsList li{
    margin-bottom: 20px;
    background: #e3e3e3;
    padding: 5px;
    font-size: 12px;
  }
  .newsList li:last-child{
    margin-bottom: 0;
  }
  .newsList li img{
    width: 20px;
    margin-right: 5px;
  }
</style>
