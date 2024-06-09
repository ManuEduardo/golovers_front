<script setup lang="ts">
import ButtonRounded from "@/components/ButtonRounded.vue";
import InputChat from "@/pages/announcements/components/InputChat.vue";
import SearchSvg from "@/vendor/svg/SearchSvg.vue";

const emits = defineEmits(['search'])
</script>

<template>
  <InputChat>
    <ButtonRounded @click="emits('search')">
      <SearchSvg/>
    </ButtonRounded>
  </InputChat>
</template>

<style scoped>

</style>