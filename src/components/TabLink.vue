<script setup lang="ts">
import AppLink from "@/vendor/components/AppLink.vue";

</script>

<template>
<AppLink
    to=""
    class="p-1 text-sm"
    active-class="border-b border-main"
>
  <slot/>
</AppLink>
</template>

<style scoped>

</style>