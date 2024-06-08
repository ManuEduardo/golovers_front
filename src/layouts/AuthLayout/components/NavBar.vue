<script setup lang="ts">

import MenuButton from "@/vendor/components/MenuButton.vue";
import NavLink from "@/components/NavLink.vue";
import HomeSvg from "@/vendor/svg/HomeSvg.vue";
import useShow from "@/vendor/useShow";

const {show, handleShow} = useShow()
</script>

<template>
  <div class="bg-main fixed h-full top-0 left-0 z-10 duration-200"
       :class="{'w-20 ':!show, 'w-48':show}">
    <div class="grid gap-6 mt-8">
      <div class="">
        <MenuButton v-model="show"/>
      </div>
      <NavLink
          @click="handleShow"
          :to="{name:'groups'}"
          :component="HomeSvg">
        INICIO
      </NavLink>
    </div>
  </div>
  <div v-show="show" class="h-screen w-screen fixed top-0 left-0 bg-black/30 blur-sm" @click="handleShow">
  </div>
</template>

<style scoped>

</style>