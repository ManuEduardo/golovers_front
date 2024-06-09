<script setup lang="ts">

defineProps({
  name:String,
  link:String
})

</script>

<template>
  <div class="p-2 text-indigo-900 hover:text-indigo-600">
    <a :href="link" target="_blank">{{ name }}</a>
  </div>
</template>

<style scoped>

</style>