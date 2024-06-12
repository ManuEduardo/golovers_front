<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  name: String,
  score: Number,
  por: Number
})

const classes = computed(()=>{
  if(props.por > 0.75) return 'green'
  if(props.por > 0.4) return 'yellow'
   return 'red'
})

</script>

<template>
  <div class="pl-4 flex justify-between gap-4 items-center">
    <p class="text-md">{{ name }}</p>
    <div class="rounded-full p-2 w-16 text-center " :class="classes">
      <p class="font-bold">{{ score }} pt</p>
    </div>
  </div>


</template>

<style scoped>
.red {
  background: #f87171;
}

.green {
  background: #4ade80;
}

.yellow {
  background: #fef08a;
}
</style>