<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
defineProps({
  component: {
    type: Object,
    required: false
  },
  classText: {
    type: String
  }
})
</script>

<template>
  <div class="flex gap-2 items-center">
    <component :is="component"/>
    <p :class="$attrs.class">
      <slot/>
    </p>
  </div>
</template>

<style scoped>

</style>