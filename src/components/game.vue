<template>
  <div>
    <div class="box">
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div @click="motion" class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
      <div class="bord">
        <img v-if="x" class="tic" src="../assets/X.svg" alt="">
        <img v-if="o" class="tac" src="../assets/0.svg" alt="">
      </div>
  
  
    </div>
    
    <!-- <div>
      <input type="text">
      <input type="text">
      <button>начать</button>
    </div> -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';


  let counter = ref(0);
  const x = ref(false);
  const o = ref(false);
  const arrCount = ref([0]);


  const motion = () => {
    console.log('a')
    if(x.value || o.value === true) {
      console.log('adf');
      return;
    }

    if (arrCount.value.length === 0 || counter.value === 0 || counter.value % 2 === 0) {
      x.value = true;
    }
    if (counter.value % 2 !== 0) o.value = true;
    counter++;
    arrCount.value.push(counter.value);
  }

</script>

<style scoped>
  .box {
    width: 450px;
    height: 300px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
  .bord {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
  }

</style>