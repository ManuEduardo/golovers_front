<script setup lang="ts">
</script>

<template>

  <div class="bg-white px-4 py-4 rounded-lg shadow-lg">
    <div class="pb-4">
      <p class="text-xl font-bold uppercase">
        <slot name="title"/>
      </p>
    </div>
    <div class="">
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>