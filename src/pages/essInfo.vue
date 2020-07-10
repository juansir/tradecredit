<template>
    <div>
      <!--header-->
      <moreHeader></moreHeader>

      <div class="essContent">
        <!--header-->
        <div class="clear essContent_head">
          <div class="fl-left">{{company}} <span class="ess_notice" v-if="notice" @click="noticeDel">取消关注</span><span class="ess_noticeDel" @click="noticeAdd" v-else>点击关注</span></div>
          <!--<div class="fl-right essDown"><img src="../../static/img/downLoad.png" alt="">下载报告</div>-->
        </div>

        <!--tab-->
        <ul class="essTab clear">
          <li v-for="(item,index) in navList" :key="index" @click="changeTab(index)" :class="{ whiteBg:changeTabShow == index}">{{item}}</li>
        </ul>
        <!--components-->
        <div class="essContent_dom">
          <normalInfo></normalInfo>
        </div>
      </div>

      <!--公用底部-->
      <allFooter></allFooter>
    </div>
</template>

<script>
  import moreHeader from '@/components/moreHeader'
  import allFooter from '@/components/allFooter'
  import normalInfo from '@/components/normalInfo'
    export default {
      name: "essInfo",
      components:{normalInfo,moreHeader,allFooter},
      data(){
          return{
            company:'浙江英特集团有限公司',
            notice:true,
            navList:['企业基本信息','企查查','中信保','中诚信'],
            changeTabShow:0,
          }
      },
      methods:{
        noticeDel(){
          this.notice = false
        },
        noticeAdd(){
          this.notice = true
        },
        /*切换tab*/
        changeTab(index){
          this.changeTabShow = index
        }
      }
    }
</script>

<style scoped>
  .essContent{
    width: 1200px;
    margin: 0 auto;
  }
  .essContent_head{
    line-height: 70px;
    font-size: 18px;
  }
  .essContent_head span{
    display: inline-block;
    font-size: 12px;
    margin-left: 20px;
    cursor: pointer;
  }
  .ess_notice{
    color: #ffa931;
    background: url("../../static/img/notice.png") no-repeat 0 center;
    background-size: 15px;
    padding-left: 20px;
  }
  .ess_noticeDel{
    color: #ffa931;
    background: url("../../static/img/noticeDel.png") no-repeat 0 center;
    background-size: 15px;
    padding-left: 20px;
  }
  .essDown{
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
    text-align: center;
    background: #fff;
    font-size: 12px;
    color: #204051;
    box-shadow: 0 0 5px #e3e3e3;
    cursor: pointer;
  }
  .essDown img{
    width: 20px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .essTab li{
    line-height: 35px;
    float: left;
    width: 150px;
    text-align: center;
    background: #eee;
    cursor: pointer;
    font-size: 12px;
  }
  .essTab li:hover{
    background: #ddd;
  }
  .essTab li.whiteBg{
    background: #fff;
  }
  .essContent_dom{
    width: 100%;
    background: #fff;
    padding: 20px;
  }
</style>
