<template>
    <div>
      <!--header-->
      <moreHeader></moreHeader>

      <div class="essContent">
        <!--header-->
        <div class="clear essContent_head">
          <div class="fl-left">{{company}} <span class="ess_notice" v-if="notice" @click="noticeDel">取消关注</span><span class="ess_noticeDel" @click="noticeAdd" v-else>点击关注</span></div>
        </div>

        <!--tab-->
        <ul class="essTab clear">
          <li v-for="(item,index) in navList" :key="index" @click="changeTab(index)" :class="{ whiteBg:changeTabShow == index}">{{item}}</li>
        </ul>
        <!--components-->
        <div class="essContent_dom">
          <normalInfo v-if="changeTabShow==0"></normalInfo>
          <sinosure v-if="changeTabShow==2"></sinosure>
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
  import sinosure from '@/components/sinosure'
  import axios from 'axios';
    export default {
      name: "essInfo",
      components:{normalInfo,moreHeader,allFooter,sinosure},
      data(){
          return{
            company:'浙江英特集团有限公司',
            notice:true,
            navList:['企业基本信息','企查查','中信保','中诚信'],
            changeTabShow:0,
          }
      },
      mounted() {
        this.changeTabShow = this.$route.query.id
        this.getCare(1,'')
      },
      methods:{
        /*关注清单*/
        getCare(id,val){
          axios.post(this.$api.getCareList, {
            "userId":2,
            "companyId":id,
            "relation":val
          }).then(res => {
            if (res.status == 200) {
              console.log(res.data);
            }
          });
        },
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
