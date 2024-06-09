<script setup lang="ts">
import TabLink from "@/components/TabLink.vue";
import NavTabDefault from "@/layouts/components/NavTabDefault.vue";

defineProps({
  idGroup: Number,
  idKanban: Number
})
</script>

<template>
  <div class=" flex flex-col h-full ">
    <NavTabDefault>
      <TabLink :to="{name:'panels', params:{idGroup:idGroup}}">PANEL DE CONTROL</TabLink>
      <TabLink :to="{name:'announcements'}">ANUNCIOS</TabLink>
      <TabLink :to="{name:'kanban', params:{idKanban:idKanban??1}}">TABLERO KAMBAN</TabLink>
      <TabLink :to="{name: 'roulette'}">RULETA</TabLink>
    </NavTabDefault>
    <div class="flex-grow h-full overflow-y-scroll py-5">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>