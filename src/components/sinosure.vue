<template>
    <div>
      <div class="clear">
        <div class="fl-right essDown"><img src="../../static/img/downLoad.png" alt="">下载报告</div>
      </div>
      <div class="normal_info">
        <p class="normal_infoTitle">基本信息</p>
        <ul class="flexWrap normal_infoList">
          <li><label>法定代表人</label><span></span></li>
          <li><label>经营状态</label><span></span></li>
          <li><label>成立日期</label><span></span></li>
          <li><label>注册资本</label><span></span></li>
          <li><label>实缴资本</label><span></span></li>
          <li><label>缴费日期</label><span></span></li>
          <li><label>统一社会信用代码</label><span></span></li>
          <li><label>组织机构代码</label><span></span></li>
          <li><label>所属行业</label><span></span></li>
          <li><label>曾用名</label><span></span></li>
          <li><label>英文名</label><span></span></li>
          <li><label></label><span></span></li>
        </ul>
      </div>
      <div class="normal_info">
        <p class="normal_infoTitle">背景规模概要</p>
        <ul class="flexWrap normal_infoList">
          <li><label>成立年限</label><span>15年</span></li>
          <li><label>员工人数</label><span>997</span></li>
          <li><label>企业规模</label><span>大型</span></li>
          <li><label>上市公司</label><span></span></li>
          <li class="native"><label>实际控制人性质</label><span></span></li>
          <li class="nativeBig"><label>SinoRating说明</label><span></span></li>
        </ul>
      </div>
      <div class="normal_info">
        <p class="normal_infoTitle">风险异动概要</p>
        <table class="normal_table">
          <tr>
            <th>股东名称</th>
            <th>持股比例</th>
            <th>持股金额</th>
            <th>币种</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
      name: "sinosure",
      data(){
          return{
          }
      }
    }
</script>

<style scoped>
  .normal_infoTitle{
    font-weight: 600;
    margin-bottom: 20px;
  }
  .normal_info{
    width: 100%;
    margin-bottom: 20px;
  }
  .normal_infoList li{
    width: 33.33%;
    font-size: 12px;
    text-align: center;
  }
  .normal_infoList li label,span{
    display: inline-block;
    width: 50%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #EBEEF5;
    vertical-align: middle;
    box-sizing: border-box;
  }
  .normal_infoList li.native{
    width: 66.66%;
  }
  .normal_infoList li.native label{
    width: 25%;
  }
  .normal_infoList li.native span{
    width: 75%;
  }
  .normal_infoList li.nativeBig{
    width: 100%;
  }
  .normal_infoList li.nativeBig label{
    width:16.67%;
  }
  .normal_infoList li.nativeBig span{
    width:83.33%;
  }
  .normal_infoList li label{
    background: #f1f3f4;
  }
  .normal_table{
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
  .normal_table th,td{
    height: 35px;
    line-height: 35px;
    border: 1px solid #EBEEF5;
    font-weight: 500;
  }
  .normal_table th{
    background: #f1f3f4;
  }
  .essDown{
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    text-align: center;
    background: #fff;
    font-size: 12px;
    color: #204051;
    box-shadow: 0 0 5px #e3e3e3;
    border: 1px solid #204051;
    cursor: pointer;
  }
  .essDown:hover{
    color: #fff;
    background: #1b7fbd;
    border: 1px solid #1b7fbd;
  }
  .essDown img{
    width: 20px;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
