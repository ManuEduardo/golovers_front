<script setup lang="ts">
import ChatCardComponent from "@/pages/announcements/components/ChatCardComponent.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
</script>

<template>
  <div class="flex flex-col min-h-full">
    <div class="px-8 flex-grow bg-white shadow-md shadow-gray-400 rounded-xl h-full flex flex-col">
      <div class="p-4 flex-grow my-7 rounded-lg">
        <ChatCardComponent name="Alumno">
          Recordatorio: Entrega del avance es este viernes
        </ChatCardComponent>
      </div>
    </div>
    <div class="flex justify-end my-4">
      <RouterLink :to="{name:'announcements-create'}">
        <ButtonDefault class="text-xl py-3">+ Crear Anuncio</ButtonDefault>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>