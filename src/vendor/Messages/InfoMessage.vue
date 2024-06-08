<script setup lang="ts">

import InfoSvg from "@/vendor/svg/InfoSvg.vue";
import Message from "@/vendor/Messages/Message.vue";
</script>

<template>
  <div>
    <Message :component="InfoSvg" class="text-gray-600">
      <slot/>
    </Message>
  </div>
</template>

<style scoped>

</style>