import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    getState: state => prop => state[prop],
  },
  mutations: {
    SET_STATE: (state, { prop, value }) => {
      state[prop] = value
    }
  },
  actions: {
    setState ({ commit }, obj) {
      for (const key in obj) {
        if (obj[key]) {
          commit('SET_STATE', { prop: key, value: obj[key] })
        }
      }
    }
  },
  modules: {
  }
})
