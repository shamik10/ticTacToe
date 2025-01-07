<template>
  <div>
    <div class="box" key="id">
      <cell @cellId="getId" v-for="number of numbers" 
      :key="numbers[number - 1]"
      :id = "numbers[number - 1]"
      :path = "(() => {
        if(id === reloadId.value) {
          return true;
        }
        else return false;
      }) ? (flag ? '/X.svg' : '/O.svg') : ('/white.jpg')"
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
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const flag = store.state.flag;
  const reloadId = ref(0)

  function getId(id) {
    reloadId.value = id;
    console.log(id)
  }

  const numbers = [1,2,3,4,5,6,7,8,9];

  const positions =  {
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

  // const xOrO = () => {
  //   if(store.state.cells[] === 0) {
  //     return false;
  //   }
  //   if (store.state.cells[] === 1) {
  //     return '/X.svg';
  //   }

  //   if (store.state.cells[] === 2) {
  //     return '/O.svg';
  //   }
  //   else return false;
    
  // }

  let counter = ref(0);

  const arrCount = ref([0]);
  function getFlag () {
    store.commit('reFlag')
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
  

</style>