<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
import UserIconSVG from "@/vendor/svg/UserIconSVG.vue";
import DropDown from "@/vendor/components/DropDown.vue";
import useAuth from "@/composables/useAuth";
import {computed} from "vue";

const {authUser, handleLogout} = useAuth()

const code = computed(()=>authUser.value.email.split("@")[0])
</script>

<template>

  <div class="px-2 py-2 flex border-l-2 border-black gap-5">
    <div class="flex-grow text-center">
      <p class="text-sm">Hola, <span class="font-black">{{ `${authUser.name} ${authUser.lastName}` }}</span></p>
      <p class="text-xs">{{ code }}</p>
    </div>
    <div class="flex items-center gap-2">
      <DropDown>
        <template #trigger>
          <UserIconSVG class="w-7 h-7" fill="fill-gray-400"/>
          <ArrowSvg class="w-7 h-7" fill="fill-gray-400"/>
        </template>
        <template #content>
          <p @click="handleLogout">SALIR</p>
        </template>
      </DropDown>
    </div>
  </div>


</template>

<style scoped>

</style>