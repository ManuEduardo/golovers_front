<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  name: String,
  score: Number
})

const classScore = ref()

const classesScore = {
  low: 'bg-red-400',
  medium: 'bg-yellow-200',
  high: 'bg-green-400'
};

if (props.score < 4) {
  classScore.value = classesScore.low
}else if (props.score > 4 && props.score < 10) {
  classScore.value = classesScore.medium
}else{
  classScore.value = classesScore.high
}
</script>

<template>
  <div class="pl-4 flex justify-between gap-4 items-center">
    <p class="text-md">{{ name }}</p>
    <div class="rounded-full p-2 w-16 text-center bg-yellow-200">
      <p class="font-bold">{{ score }} pt</p>
    </div>
  </div>


</template>

<style scoped>

</style>