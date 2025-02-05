<template>
      <div @click="sendEmit" class="bord">
        <img v-if="value" class="tic" :src="value === 1 ? '/X.svg' : '/O.svg'" >
        
        
      </div>
</template>

<script setup>
  import { ref, computed, onMounted, reactive} from 'vue';
  import {useStore} from "vuex"

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
  }
 .tic {
  width: 64px;
  height: 64px;
 }
</style>