<script setup lang="ts">

</script>

<template>
  <div class="bg-sky-950 items-center text-center font-bold pl-4 py-2 rounded-lg">
    <p class="text-5xl py-2 text-white"><slot name="title"/></p>
    <p class="text-md text-gray-400 py-2">
      <slot name="subtitle"/>
    </p>
  </div>
</template>

<style scoped>

</style>