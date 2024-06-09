<script setup lang="ts">
import NavTab from "@/layouts/GroupsLayout/components/NavTab.vue";
</script>

<template>
  <div class="flex h-full">
    <div class="flex-grow px-16 py-5">
      <NavTab/>
      <RouterView/>
    </div>
    <div class="w-80 px-6 flex-shrink-0">

    </div>
  </div>
</template>

<style scoped>

</style>