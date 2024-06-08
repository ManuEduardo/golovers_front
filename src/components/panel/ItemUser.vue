<script setup lang="ts">
import UserPerfile from "@/components/UserPerfile.vue";
import {ref} from "vue";

const props = defineProps({
  nombre: String
})

</script>

<template>

  <div class="pl-4 flex">
    <UserPerfile class="bg-gray-400 text-black" :user="nombre"/>
    <div class="pl-3 pt-1 pb-4 text-m">
      {{nombre}}
    </div>
  </div>

</template>

<style scoped>

</style>