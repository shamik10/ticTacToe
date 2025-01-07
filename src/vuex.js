import { createStore } from 'vuex'

const store = createStore({
  state: {
    cells: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    flag: false
  },
  mutations: {
    reFlag(state) {
      state.flag = !state.flag;
      console.log(state.flag);
    },
    cellsChange(state, val) {
      state.cells[val] = state.flag ? 1 : 2;
      
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