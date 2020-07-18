const url = 'http://106.14.210.23:9292/'

const api = {
  latestWords :url +'company/latestWords', //搜索列表
  getSearchList :url +'company/searchList',
  getCareList :url +'user/getCareList', //关注列表
  getCareOrNot :url +'user/careOrNot',  //关注事件
  getCareStatus :url +'user/getCareStatus', //企业关注
  zhongxinbao :'http://10.0.130.28:9292/company/zhongxinbao', //企业关注
}

module.exports = api
