import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    showMobileNav: false,
    categories: [],
    category: {},
    expertId: null,
    service: {},
    profile: {},
    showError: false,
    errorMsg: ''
  },
  mutations: {
    showMobileNav(state, val){
      state.showMobileNav = val
    },
    startLoading(state){
      state.loading = true
    },
    endLoading(state){
      state.loading = false
    },
    setError(state, payload){
      state.showError = payload.status
      state.errorMsg = payload.msg
    },
    setCategories(state, val){
      state.categories = val
    },
    selectCategory(state, val){
      state.category = val
      console.log(state.category)
    },
    setExpertId(state, val){
      state.expertId = val
      console.log(state.expertId)
    },
    setService(state, val){
      state.service = val
      console.log(state.service)
    },
    setProfile(state, val){
      state.profile = val
      console.log(state.profile)
    },
  },
  actions: {
    handleError({commit}, err){
      console.log(err.response.data.message)
      if(err.response.data.message){
        commit('endLoading')
        commit('setError', {status: true, msg: err.response.data.message})
      }else{
        commit('endLoading')
        commit('setError', {status: true, msg: "An error occured"})
      }
    }
  },
  modules: {
  }
})
