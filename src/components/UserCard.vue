<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
import UserIconSVG from "@/vendor/svg/UserIconSVG.vue";
import {useAuthStore} from "@/stores/AuthStore";
import DropDown from "@/vendor/components/DropDown.vue";

const {authUser} = useAuthStore()
</script>

<template>

  <div class="px-2 py-2 flex border-l-2 border-black gap-5">
    <div class="flex-grow text-center">
      <p class="text-sm">Hola, <span class="font-black">{{ `${authUser.name} ${authUser.lastName}` }}</span></p>
      <p class="text-xs">{{ authUser.id }}</p>
    </div>
    <div class="flex items-center gap-2">
      <DropDown>
        <template #trigger>
          <UserIconSVG class="w-7 h-7" fill="fill-gray-400"/>
          <ArrowSvg class="w-7 h-7" fill="fill-gray-400"/>
        </template>
        <template #content>
          hola
        </template>
      </DropDown>
    </div>
  </div>


</template>

<style scoped>

</style>