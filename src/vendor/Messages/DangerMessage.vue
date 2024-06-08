<script setup lang="ts">

import Message from "@/vendor/Messages/Message.vue";
</script>

<template>
  <div>
    <Message class="text-red-500 font-bold text-sm">
      <slot/>
    </Message>
  </div>
</template>

<style scoped>

</style>