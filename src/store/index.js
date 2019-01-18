import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import * as types from './types.js'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store;