<template>
    <div>
      <!--导航栏-->
      <div class="navHeader">
        <div class="clear navHeader_content">
          <router-link to="/" class="fl-left headerLink"><img src="../../static/img/logo.png" alt=""></router-link>
          <ul class="fl-right clear navHeader_list">
            <li class="active">资信门户</li>
            <li>数据分析</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "moreHeader",
      data(){
          return{
            searchText:'',
            searchList:['浙江国贸','浙江英特'],
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .navHeader{
    width: 100%;
    height: 60px;
    /*background: #dfd3c3;*/
    background: #1b7fbd;
  }
  .navHeader_content{
    width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
  }
  .headerLink{
    display: block;
  }
  .headerLink img{
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
    background: #fff;
    border-radius: 20px;
  }
</style>
