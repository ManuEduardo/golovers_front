<script setup lang="ts">
import IconUserSvg from "@/vendor/svg/IconUserSvg.vue";
import UserPerfile from "@/components/UserPerfile.vue";

defineProps({
  name:String
})
</script>

<template>

  <div
      class="flex bg-opacity-25 shadow-lg bg-blue-800 backdrop-blur-sm border border-opacity-25 border-white rounded-3xl p-4 max-w-xl h-min m-2">
    <div class="flex-col">
      <UserPerfile :name="name"/>
    </div>
    <div class="ml-4 mb-5">
      <div class="">{{name}}</div>
      <div class="mt-6">
        <slot />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>