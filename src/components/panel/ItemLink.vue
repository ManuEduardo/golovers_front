<script setup lang="ts">

const props = defineProps({
  nombre:String,
  link:String
})

</script>

<template>
  <div class="p-2">
    <a :href="link" target="_blank">{{nombre}}</a>

  </div>
</template>

<style scoped>

</style>