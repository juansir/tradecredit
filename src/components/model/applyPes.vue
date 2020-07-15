<template>
    <div class="po-fixed fixedBg">
      <div class="appleyRes">
        <div class="appleyRes_title po-relative"><p>信保报告申请</p><span class="po-absolute" @click="hideshowPes"></span></div>
        <div class="appleyRes_content">
          <p class="apply_title">申请人：{{user}}</p>
          <!--有信保代码-->
          <div class="apply_info">
            <p class="apply_infoTitle">信保报告申请（已有信保代码）</p>
            <table class="apply_table">
              <tr>
                <th>待调查企业中国信保企业代码</th>
                <th>待调查企业国别</th>
                <th>待调查企业中文名称</th>
                <th>待调查企业英文名称</th>
                <th>待调查企业地址</th>
                <th>待调查企业统一社会信用代码</th>
                <th>是否导读</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><div class="applyBtn">点击申请</div></td>
              </tr>
            </table>
          </div>
          <!--无信保代码-->
          <div class="apply_info">
            <p class="apply_infoTitle">信保报告申请（无信保代码）</p>
            <table class="apply_table">
              <tr>
                <th>待调查企业中国信保企业代码</th>
                <th>待调查企业国别</th>
                <th>待调查企业中文名称</th>
                <th>待调查企业英文名称</th>
                <th>待调查企业地址</th>
                <th>待调查企业统一社会信用代码</th>
                <th>是否导读</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><div class="applyBtn">点击申请</div></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applyPes",
      data(){
          return{
            user:'admin'
          }
      },
      methods:{
        hideshowPes(){
          this.$parent.showPes = false
        }
      }
    }
</script>

<style scoped>
  .appleyRes{
    width: 1200px;
    margin: 100px auto;
  }
  .appleyRes_title{
    line-height: 40px;
    background: #1b7fbd;
  }
  .appleyRes_title span{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../../../static/img/close.png") no-repeat center center;
    background-size: 25px;
    cursor: pointer;
    right: 5px;
    top: 0;
  }
  .appleyRes_title p{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  .appleyRes_content{
    padding: 20px;
    background: #fff;
  }
  .apply_title{
    font-size: 12px;
    margin-bottom: 10px;
  }
  .apply_infoTitle{
    width: 100%;
    line-height: 35px;
    text-align: center;
    background: #e3e3e3;
    font-weight: 600;
  }
  .apply_info{
    margin-bottom: 50px;
  }
  .apply_table{
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
  .apply_table th,td{
    height: 35px;
    border: 1px solid #EBEEF5;
    font-weight: 500;
  }
  .apply_table th{
    background: #f1f3f4;
  }
  .applyBtn{
    line-height: 30px;
    background: #1b7fbd;
    color: #fff;
    cursor: pointer;
    margin: 8px;
  }
</style>
