const url = 'http://106.14.210.23:9292/'

const api = {
  getSearchList :url +'company/searchList',
  getCareList :url +'user/getCareList',
  getCareOrNot :url +'user/careOrNot'
}

module.exports = api
