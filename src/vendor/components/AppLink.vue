<script setup>
import {RouterLink} from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  // add @ts-ignore if using TypeScript
  ...RouterLink.props,
})

</script>

<template>
  <router-link
      v-bind="$props"
      v-slot="{ isActive, href, navigate }"
  >
    <a
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        :class="isActive && activeClass"
    >
      <slot/>
    </a>
  </router-link>
</template>