<script setup lang="ts">
import ChatCardComponent from "@/pages/announcements/components/ChatCardComponent.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import useAnnouncements from "@/composables/useAnnouncements";

const {announcements} = useAnnouncements()

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="px-8 flex-grow bg-white shadow-md shadow-gray-400 rounded-xl
    h-full flex flex-col">
      <div class="p-4 flex-grow my-7 rounded-lg overflow-y-scroll">
        <ChatCardComponent
            v-for="(item, idx) in announcements"
            :key="item.id"
            :name="`Alumno ${item.id}`">
          {{ item.message }}
        </ChatCardComponent>
      </div>
    <div class="flex justify-end my-4">
      <RouterLink :to="{name:'announcements-create'}">
        <ButtonDefault class="text-xl py-3 bg-main">+ Crear Anuncio</ButtonDefault>
      </RouterLink>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>