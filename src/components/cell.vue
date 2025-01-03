<template>
      <div @click="motion" class="bord">
        <img v-if="flag" class="tic" :src="xox ? '/X.svg' : '/O.svg'">
        
      </div>
</template>

<script setup>
  import { ref } from 'vue';
  const flag = ref(false);
  const xox = ref(false);
  const o = ref(false);
  const props = defineProps({
    id: Number
  })
  const motion = () => {
    flag.value = true;
    xox.value = !xox.value;
    // o.value = !x.value;
    console.log(props.id);
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
  }
 .tic {
  width: 64px;
  height: 64px;
 }
</style>