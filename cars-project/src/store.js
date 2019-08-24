import Vue from 'vue'
import Vuex from 'vuex'
import userActions from '../src/users/usersActions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: userActions,
  getters: {
    getUser: state => state.user
  }
})
