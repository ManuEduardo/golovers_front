<script setup lang="ts">
import AppLink from "@/vendor/components/AppLink.vue";

defineProps({
  component: Object
})

</script>

<template>
  <AppLink
      class="text-center font-bold  py-4 block"
      inactive-class="fill-white text-white"
      active-class="bg-white text-main fill-main"
  >
    <component :is="component" class="w-10 mx-auto mb-2"/>
    <p class="text-xs">
      <slot/>
    </p>
  </AppLink>
</template>

<style scoped>

</style>