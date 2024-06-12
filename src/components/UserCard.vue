<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
import UserIconSVG from "@/vendor/svg/UserIconSVG.vue";
import DropDown from "@/vendor/components/DropDown.vue";
import useAuth from "@/composables/useAuth";
import {computed, ref} from "vue";

const {authUser, handleLogout} = useAuth()
const showMessage = ref(false);

const copyToClipboard = async () => {
  const textToCopy = `${authUser.value.lastName} ${authUser.value.name} - ${code.value}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
    showMessage.value = true;
    setTimeout(() => {
      showMessage.value = false;
    }, 1000);
  } catch (err) {
    console.error('Error al copiar al portapapeles: ', err);
  }
};
const code = computed(()=>authUser.value.email.split("@")[0])
</script>

<template>

  <div class="px-2 py-2 flex border-l-2 border-black gap-5 transition">
    <div class="flex-grow text-center hover:cursor-copy hover:scale-95" @click="copyToClipboard">
      <p class="text-sm">Hola, <span class="font-black">{{ `${authUser.name} ${authUser.lastName}` }}</span></p>
      <p class="text-xs">{{ code.toLocaleUpperCase() }}</p>
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

<div v-if="showMessage" class="fixed flex flex-col p-2 bg-white/60 text-slate-800/60 max-w-64">
  <p class=" text-sm text-left">
    {{ `${authUser.lastName} ${authUser.name} - ${code.toLocaleUpperCase()}` }}
  </p>
  <svg class="w-8 h-8 text-gray-800/60 block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M7 9v6a4 4 0 0 0 4 4h4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1v2Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M13 3.054V7H9.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 13 3.054ZM15 3v4a2 2 0 0 1-2 2H9v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
  </svg>

</div>

</template>

<style scoped>

</style>