import { createStore } from 'vuex'

const store = createStore({
  state: {
    flag: false
  },
  mutations: {
    reFlag(state) {
      state.flag = !state.flag
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

export default store;