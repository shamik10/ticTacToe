<template>
  <div class="tictac">
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
    <div class="tictac-block">
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
      if(board[a] === 1 && names.player1.length !== 0) {
        names.plWinCount1++;
        return `Победитель ${names.player1}`;
        

      }
      else if (board[a] === 2 && names.player2.length !== 0) {
        names.plWinCount2++;
        return `Победитель ${names.player2}`;
      }
      else if (board[a] === 1) {
        return `Победитель Х`;
      }
      else if (board[a] === 2) {
        return `Победитель О`;
      }
      else return `Ничья!`
    }
  }
  
  return 0;
}




</script>

<style scoped>

  .tictac {
    padding: 0;
    width: 1200px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: start;
    /* align-items: center; */
  }

  .tictac-block { 
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .box {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 150px;
  }
  .cell {
    width: 450px;
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    

  }
  

  .players-name {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    /* align-items: center; */
    gap: 10px;
    padding-bottom: 30px;
    height: 100px;
    padding-left: 20px;
    /* width: 600px; */
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
    background-color: #fff;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn:hover {
     background-color: rgb(72, 72, 204);
  }

  @media (prefers-color-scheme: dark) {
    body {
        background-color: #ffffff; 
        color: #000000; 
    }
}

  @media (max-width: 900px) {
    .cell {
      width: 250px;
      margin-right: 100px;
    }

    .update-btn { 
      display: flex;
      justify-content: center;
    }

    .btn { 
      padding: 8px;
      font-size: 12px;
      width: 125px;
      margin-right: 100px;
    }
  }
  @media (max-width: 600px) {
    .cell {
      width: 200px;
    }
    .box {
      padding-right: 300px;
      margin-left: 0;
    }
    .update-btn { 
      display: flex;
      justify-content: center;
    }
    .btn { 
      padding: 4px;
      font-size: 10px;
      width: 125px;
    }
    .players-name__input { 
      background-color: #fff;
    }
  }

  @media (max-width: 500px) {
    .tictac { 
      flex-direction: column;
    }

    .box { 
      padding-right: 700px;
    }
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