<template>
    <div>
      <allHeader @child="getInfo"></allHeader>
      <!--中间内容-->
      <div class="index_content flex">
        <!--检测列表-->
        <div class="pro_content_left">
          <p class="content_title">检测列表 <span class="fl-right">根据关键字，共搜索到 {{num}} 条数据结果</span></p>
          <ul class="proList_li" v-if="userList.length>0">
            <li class="clear" v-for="(item,index) in userList" :key="index">
              <div class="fl-left proList_content">
                <p class="proList_txt">{{item.companyName}}</p>
                <p>社会统一信用代码：{{item.creditCode}}</p>
                <p>法人代表：{{item.operName}}</p>
                <p>成立时间：{{item.buildDate}}</p>
              </div>
              <dl class="fl-right proList_btn">
                <dd>企查查</dd>
                <dd>中信保</dd>
                <dd>中诚信</dd>
                <dd @click="moreNews">更多详情</dd>
              </dl>
            </li>
          </ul>
        </div>
        <!--我的关注-->
        <div class="pro_content_right">
          <p class="content_title">我的关注</p>
          <div class="warn_push">
            <ul class="newsList">
              <li v-for="(item,index) in followList" :key="index">
                <img src="../../static/img/notice.png" alt="">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--footer-->
      <allFooter></allFooter>
    </div>
</template>

<script>
  import allHeader from '@/components/allHeader'
  import allFooter from '@/components/allFooter'
  import axios from 'axios';
    export default {
      name: "proList",
      components:{allHeader,allFooter},
      data(){
          return{
            num:0,
            userList:[
              /*{name:'浙江英特集团有限公司',code:'xxxxxxx',user:'xxx',time:'2020-06-20'},
              {name:'浙江英特集团有限公司',code:'xxxxxxx',user:'xxx',time:'2020-06-20'},
              {name:'浙江英特集团有限公司',code:'xxxxxxx',user:'xxx',time:'2020-06-20'},
              {name:'浙江英特集团有限公司',code:'xxxxxxx',user:'xxx',time:'2020-06-20'},
              {name:'浙江英特集团有限公司',code:'xxxxxxx',user:'xxx',time:'2020-06-20'},
            */],
            followList:['浙江英特集团有限公司','浙江英特集团有限公司','浙江英特集团有限公司','浙江英特集团有限公司','浙江英特集团有限公司','浙江英特集团有限公司','浙江英特集团有限公司']
          }
      },
      mounted() {
        //console.log(this.$route.params.text);
        this.getInfo(this.$route.params.text)
      },
      methods:{
        getInfo(text){
          axios.post(this.$api.getSearchList, {
            "keyword":text,
            "page":1
          }).then(res => {
            if (res.status == 200) {
              //console.log(res.data);
              this.userList = res.data.searchList
              this.num = res.data.searchList.length
            }
          });
        },
        moreNews(){
          this.$router.push('/essInfo')
        }
      }
    }
</script>

<style scoped>
  .content_title span{
    color: #999;
    font-size: 12px;
  }
  .proList_li li{
    padding: 10px;
    border-bottom: 1px solid #d3d3d3;
  }
  .proList_content{
    width: 60%;
    font-size: 12px;
    color: #666;
  }
  .pro_content_left{
    width: 68%;
  }
  .pro_content_right{
    width: 28%;
  }
  .proList_txt{
    font-weight: 600;
    margin-bottom: 5px;
    color: #000;
    font-size: 14px;
  }
  .proList_btn{
    width: 40%;
    text-align: right;
    position: relative;
    top: 25px;
  }
  .proList_btn dd{
    display: inline-block;
    width: 60px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border: 1px solid #617be3;
    border-radius: 5px;
    color: #617be3;
    margin-left: 10px;
    cursor: pointer;
  }
  .proList_btn dd:hover{
    background: #617be3;
    color: #fff;
  }
</style>
