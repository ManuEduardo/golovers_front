<script setup lang="ts">
import IconUserSvg from "@/vendor/svg/IconUserSvg.vue";
import UserPerfile from "@/components/UserProfile.vue";

defineProps({
  name:String
})
</script>

<template>

  <div
      class="flex  shadow-lg shadow-gray-400 bg-clear-sky rounded-3xl p-4 m-2">
    <div class="flex-col">
      <UserPerfile class="bg-[#2963eb]" :name="name"/>
    </div>
    <div class="ml-4 mb-5">
      <div class=" text-[#2963eb] text-xl mt-2 font-bold">{{name}}</div>
      <div class="mt-6">
        <slot />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>