<script setup lang="ts">
import TittleChat from "@/pages/announcements/components/TittleChat.vue";
import ChatNombreCurso from "@/pages/announcements/components/ChatNombreCurso.vue";
import ChatCardComponent from "@/pages/announcements/components/ChatCardComponent.vue";
import InputChat from "@/pages/announcements/components/InputChat.vue";
import UserPerfile from "@/components/UserPerfile.vue";

const participants = [
  {
    id: 1,
    name: 'Docente'
  },
  {
    id: 2,
    name: 'Estudiante'
  },
]

</script>

<template>
  <div class="h-screen w-screen flex">
    <div class="w-60 bg-blue-950 pl-5 py-4">
      <h2 class="text-4xl text-white font-bold">Chat</h2>
      <div class="pt-4 flex flex-col gap-5 mt-12">
        <div
            v-for="participant in participants"
            :key="participant.id"
            class="flex gap-4 items-center text-white text-xl">
          <UserPerfile :name="participant.name"/>
          {{ participant.name }}
        </div>
      </div>
    </div>

    <div class="flex-grow flex flex-col">
      <div class="px-8 flex-grow flex flex-col">
        <div class="mt-2">
          <TittleChat>
            <template #title>BANDEJA DE ANUNCIOS</template>
            <template #subtitle>Interactúa</template>
          </TittleChat>
          <ChatNombreCurso class="mt-2">CURSO: CALIDAD DE SOFTWARE</ChatNombreCurso>
        </div>
        <div class="p-4 bg-gray-100 flex-grow my-7 rounded-lg">
          <ChatCardComponent name="Docente">
            Recordatorio: Entrega del avance es este viernes
          </ChatCardComponent>
        </div>
      </div>
      <InputChat
          placeholder="Escribe un anuncio..."
          type="text"
          class="pt-2 pb-4 px-4"/>
    </div>
  </div>
</template>

<style scoped>

</style>