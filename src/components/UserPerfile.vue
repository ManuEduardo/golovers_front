<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  user: String
})

const firstLetter = computed(() => props.user?.charAt(0))

</script>

<template>

  <button class="rounded-full bg-black text-white h-8 w-8">{{firstLetter}}</button>

</template>

<style scoped>

</style>