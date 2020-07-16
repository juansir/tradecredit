import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = {
  state: {
    careList:[],
  },
  mutations:{
    changeCare(state, payload) {
      state.careList = payload;
    }
  },
  actions:{
    getCare(content){
      axios.post(this.$api.getCareList,{
        "userId":2,
        "companyId":1,
        "relation":val
      }).then(res => {
        content.state.careList=res.data.careList
      });
    },
  }
}

export default new Vuex.Store({
  store
})
