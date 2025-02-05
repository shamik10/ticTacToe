<template>
  <div class="main">
    <div class="players-name">
      <div class="players-name__block">
        <span class="players"> игрок1:</span> 
        <input v-model="names.player1" class="players-name__input" type="text">
        <span> {{ names.plWinCount1 }} </span>
        <!-- <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label> -->
      </div>
      <div class="players-name__block">
        <span class="players"> игрок2:</span> 
        <input v-model="names.player2" class="players-name__input" type="text">
        <span> {{ names.plWinCount2 }} </span>
        <!-- <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label> -->
      </div>
    </div>
    <div class="box">
      <div class="cell" key="id">
        <cell @click="getId"  v-for="number of Object.keys(cells)" 
        :key="+number"
        :id = "+number"
        :value="cells[number]"
        :players="names"
        />
      </div>
      <div class="update-btn">
        <button class="btn" @click="updateTable">обновить таблицу</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import cell from './cell.vue';
  import { ref, computed, reactive, watch, onMounted } from 'vue';
  import { useStore } from 'vuex';

  const names = reactive({
    player1: '',
    player2: '',
    plWinCount1: 0,
    plWinCount2: 0,

  });

  const store = useStore();
  const cells = computed(() => store.state.cells);
  

  function getId(id) {
    console.log(id);
    if (cells.value[id]) {
      console.log(cells[id]);
      return;
    }

    store.commit('cellsChange', {id, value: store.state.flag})
    store.commit('reFlag');
    const winner = checkWinner(cells.value);
    if (winner) {
      setTimeout(
        () => alert(winner),
        100
      )

    }
    
  }

  function updateTable() {
    store.commit('updateCells');
    store.commit('updateFlag');
  }



function checkWinner(board) {
  const winningCombos = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7],
  ];
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
      if(board[a] === 1) {
        names.plWinCount1++;
        return `Победитель ${names.player1}`;
        

      }
      else if (board[a] === 2) {
        names.plWinCount2++;
        return `Победитель ${names.player2}`;
      }
      else return `Ничья!`
    }
  }
  
  return 0;
}




</script>

<style scoped>

  .main {
    width: 1200px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-left: 150px;
  }
  .cell {
    width: 450px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
  

  .players-name {
    display: flex;
    flex-direction: column;
    height: 100px;
    /* width: 500px; */
    justify-content: start;
    gap: 10px;
    padding-bottom: 30px;
  }

  .players-name__block {
    display: flex;
    flex-direction: row;
    align-items: end;
    text-align: end;
    gap: 10px;
  }

  

  .players-name__input {
    width: 120px;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(12, 10, 10);
    box-sizing: border-box;
    padding: 0;
    text-align: center;
 
  }

  .players-name__input::placeholder {
    background-color: yellow;
  }


  .update-btn {
    margin-top: 10px;
  }

  .done { 
    cursor: pointer;
    padding-top: 3px;
  }

  .btn { 
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn:hover {
     background-color: rgb(72, 72, 204);
  }
  /* .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
} */
</style>