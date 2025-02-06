<template>
      <div @click="sendEmit" class="bord">
        <img v-if="value" class="tic" :src="value === 1 ? '/X.svg' : '/O.svg'" >
        
        
      </div>
</template>

<script setup>


  const props = defineProps({
    id: Number,
    value: Number,
  });

  const emit = defineEmits(['click']);

  function sendEmit () {
    emit('click', props.id)
  }

  




</script>

<style>
  .bord {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    height: 128px;
    /* width: 50px; */
 
    
  }

  @media (max-width: 900px) {
    .bord { 
      height: 64px;
    }
  }
 .tic {
  width: 55px;
  height: 55px;
 }
</style>