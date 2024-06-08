<script setup lang="ts">

import UserPerfile from "@/components/UserPerfile.vue";
</script>

<template>

  <div class="bg-white px-4 py-4 rounded-md">
    <div class="flex-row pb-4">
      <slot name="title"/>
    </div>
    <div class="pl-4">
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>