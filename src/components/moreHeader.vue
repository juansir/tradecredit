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
    </div>
</template>

<script>
    export default {
      name: "allHeader",
      data(){
          return{
            searchText:'',
            searchList:['浙江国贸','浙江英特'],
          }
      },
      mounted() {
        if(this.$route.params.text){
          this.searchText = this.$route.params.text
        }
      },
      methods:{
        search(){
          var _this = this
          console.log(_this.searchText);
          if(_this.searchText==''||undefined){
            _this.$parent.isLoginModel = true
          }else{
            _this.$router.push({name:'proList',params:{text:_this.searchText}})
          }
        }
      }
    }
</script>

<style scoped>
  .navHeader{
    width: 100%;
    height: 60px;
    background: #1b7fbd;
  }
  .navHeader_content{
    width: 1200px;
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
    background: #fff;
    border-radius: 20px;
  }
</style>
