<script setup lang="ts">
import TabLink from "@/components/TabLink.vue";

defineProps({
  idGroup: Number,
  idKanban: Number
})
</script>

<template>
  <div class=" flex flex-col h-full  ">
    <div class="py-5">
      <div class="flex gap-16">
        <TabLink :to="{name:'panels', params:{idGroup:idGroup}}">PANEL DE CONTROL</TabLink>
        <TabLink :to="{name:'announcements'}">ANUNCIOS</TabLink>
        <TabLink :to="{name:'kanban', params:{idKanban:idKanban??1}}">TABLERO KAMBAN</TabLink>
        <TabLink :to="{name: 'roulette'}">RULETA</TabLink>
      </div>
      <slot/>
    </div>
    <div class="flex-grow">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>