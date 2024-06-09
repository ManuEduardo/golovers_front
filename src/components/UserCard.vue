<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
import IconUserSvg from "@/vendor/svg/IconUserSvg.vue";
import UserIconSVG from "@/vendor/svg/UserIconSVG.vue";



</script>

<template>

  <div class="px-2 py-2 flex">
    <div class="border-black border-l px-7 py-4 text-center">
      Hola, <slot name="nombre"/>
      <p>U20556310</p>
    </div>
    <div class="pl-2 py-2 ">
      <UserIconSVG class="h-16 w-16"/>
    </div>
    <div class="h-16 w-16 pt-3 pl-2">
      <ArrowSvg/>
    </div>

  </div>


</template>

<style scoped>

</style>