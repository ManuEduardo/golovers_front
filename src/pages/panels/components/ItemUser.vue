<script setup lang="ts">
import UserPerfile from "@/components/UserProfile.vue";
import {ref} from "vue";

defineProps({
  name: String
})

</script>

<template>

  <div class="pl-4 flex items-center gap-4">
    <UserPerfile :name="name"/>
    <div class="text-md">
      {{ name }}
    </div>
  </div>

</template>

<style scoped>

</style>