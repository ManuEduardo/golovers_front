<script setup lang="ts">

import NavTabDefault from "@/layouts/components/NavTabDefault.vue";
import TabLink from "@/components/TabLink.vue";
import SideAnunce from "@/components/SideAnunce.vue";

</script>

<template>
  <div class="flex flex-col h-full">
    <NavTabDefault>
      <TabLink class="hover:scale-105 hover:font-bold transition">GRUPOS ACTIVOS</TabLink>
      <TabLink class="hover:scale-105 hover:font-bold transition">GRUPOS ARCHIVADOS</TabLink>
    </NavTabDefault>
    <div class="flex gap-4 flex-grow h-full overflow-y-scroll">
      <div class="flex-grow">
        <!-- cursos -->
        <RouterView/>
        <!-- cursos -->
      </div>

      <div class="absolute bottom-4 right-4">
        <div class="flex flex-col items-end">
          <SideAnunce/>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
:webi
</style>