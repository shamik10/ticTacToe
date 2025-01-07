<template>
      <div @click="motion" class="bord">
        <img class="tic" :src="path" >
        
      </div>
</template>

<script setup>
  import { ref, computed} from 'vue';
  import {useStore} from "vuex"
  
  const props = defineProps({
    id: Number,
    path: String
  });

  const emit = defineEmits(['cellId']);
  
  const store = useStore();
  const toStringId = toString(props.id);
  const cells = computed(() => store.state.cells);
  const flag = computed(() => store.state.flag);
  

  const xox = ref(false);
  const o = ref(false);
  const motion = () => {
    emit('cellId', props.id);
    store.commit('cellsChange', toStringId)
    store.commit('reFlag');
    
    console.log(props.id);
  }

  // const xOrO = () => {
  //   if(store.state.cells[toStringId] === 0) {
  //     return false
  //   }
  //   if (store.state.cells[toStringId] === 1) {
  //     return '/X.svg';
  //   }

  //   if (store.state.cells[toStringId] === 2) {
  //     return '/O.svg';
  //   }
  //   else return false
    
  // }



  


</script>

<style>
  .bord {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
  }
 .tic {
  width: 64px;
  height: 64px;
 }
</style>