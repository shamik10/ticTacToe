<template>
  <div>
    <div class="box" key="id">
      <cell @click="" v-for="number of numbers" 
      :key="numbers[number - 1]"
      :id = "numbers[number - 1]"
      />
    </div>
    
    <!-- <div>
      <input type="text">
      <input type="text">
      <button>начать</button>
    </div> -->
  </div>
</template>

<script setup>
  import cell from './cell.vue';
  import { ref } from 'vue';

  const numbers = [1,2,3,4,5,6,7,8,9];

  let counter = ref(0);
  
  // const o = ref(false);
  const arrCount = ref([0]);


  

</script>

<style scoped>
  .box {
    width: 450px;
    height: 300px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
  

</style>