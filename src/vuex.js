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

    flag: 1
  },
  mutations: {
    reFlag(state) {
      state.flag === 1 ? state.flag = 2 : state.flag = 1;
      console.log(state.flag, '112');
    },

    rollbackCells(state) {
      state.cells = {
       ...state.upDateCell
      }
      console.log(state.cells);
    },
    cellsChange(state, val) {
      state.cells[val.id] = val.value;
      
    },
    updateFlag(state) {
      state.flag = 1;
    },
    updateCells(state) {
      state.cells = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      }
    },
    countClick(state) {
      state.counter++;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
})

export default store;