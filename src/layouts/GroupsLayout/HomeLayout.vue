<script setup lang="ts">

import NavTabDefault from "@/layouts/components/NavTabDefault.vue";
import TabLink from "@/components/TabLink.vue";
import SideAnunce from "@/components/SideAnunce.vue";
</script>

<template>
  <div class="flex flex-col h-full">
    <NavTabDefault>
      <TabLink>GRUPOS ACTIVOS</TabLink>
      <TabLink>GRUPOS ARCHIVADOS</TabLink>
    </NavTabDefault>
    <div class="flex gap-4 flex-grow h-full overflow-y-scroll">
      <div class="flex-grow">
        <RouterView/>
      </div>
      <div class="w-80 px-6 flex-shrink-0 relative">
        <div class="fixed w-80 h-3/5 bottom-5">
          <SideAnunce/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:webi
</style>