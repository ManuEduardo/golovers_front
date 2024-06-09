<script setup lang="ts">
</script>

<template>

  <div class="bg-gray-200 p-4 rounded-lg ">
    <div class="pb-2">
      <p class="text-md uppercase pl-2">
        <slot name="title"/>
      </p>
    </div>
    <div >
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>