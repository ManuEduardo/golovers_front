<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  name: String
})

const firstLetter = computed(() => props.name?.charAt(0))

</script>

<template>

  <button class="rounded-full bg-black text-white h-12 w-12 text-xl">
    {{ firstLetter }}
  </button>

</template>

<style scoped>

</style>