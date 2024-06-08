<script setup lang="ts">

</script>

<template>
  <div class="bg-sky-950 text-white items-center text-center font-bold pl-4 py-2 rounded-s">
    <p class="text-2xl p-2"><slot name="title"/></p>
    <p class="text-xs pb-2">
      <slot name="subtitle"/>
    </p>
  </div>
</template>

<style scoped>

</style>