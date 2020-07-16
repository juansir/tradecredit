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
      <!--搜索框-->
      <div class="po-relative">
        <div class="search">
          <img class="searchLogo" src="../../static/img/bannerLogo.png" alt="">
          <div>
            <input type="text" class="search_txt" v-model="searchText"><div class="search_btn" @click="search"><img src="../../static/img/search.png" alt=""></div>
          </div>
          <div class="search_link">
            最近搜索：
            <a v-for="(item,index) in searchList" :key="index">{{item}}</a>
          </div>
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
        if(this.$route.query.text){
          this.searchText = this.$route.query.text
        }
      },
      methods:{
        search(){
          var _this = this
          if(_this.searchText==''||undefined){
            _this.$parent.isLoginModel = true
          }else{
            this.$emit('child', _this.searchText);
            _this.$router.push({name:'proList',query:{text:_this.searchText}})
            //console.log(_this.searchText);
          }
        },

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
  .search{
    width: 50%;
    margin: 20px auto;
    text-align: center;
  }
  .search_txt{
    width: 500px;
    height: 45px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 12px;
    border: 1px solid #1b7fbd;
  }
  .search_btn{
    display: inline-block;
    width: 80px;
    height: 45px;
    background: #1b7fbd;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
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
    margin: 10px auto;
    font-size: 12px;
  }
  .search_link a{
    color: #596e79;
    margin-left: 20px;
  }
  .searchLogo{
    width: 300px;
    margin: 20px 0 40px 0;
  }
</style>
