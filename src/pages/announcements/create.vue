<script setup lang="ts">
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import PaperBin from "@/vendor/svg/PaperBin.vue";
import Down from "@/vendor/svg/Down.vue";
import useAnnouncements from "@/composables/useAnnouncements";

const {form, submitCreate} = useAnnouncements()
</script>

<template>
  <div class=" shadow-xl bg-white rounded-lg">
    <div class="shadow-xl">
      <div class="pb-10">
        <ButtonDefault @click="submitCreate" class=" bg-main px-8 py-3 rounded-md flex">
          ANUNCIAR
          <p class="absolute ml-[102px] mt-[-12px] h-12 w-2 border-r-2"></p>
          <Down class="ml-10 mt-1 mr-[-20px] -rotate-90"/>
        </ButtonDefault>

      </div>
      <div class="px-10 ">
        <div class="flex border-b border-t">
          <p class="px-4 py-4">Asunto: </p>
          <input class="focus:outline-none w-full font-bold" v-model="form.affair" type="text">
        </div>
        <div class="border-b pl-4 pt-6">
          <p class=" pb-6">Descripcion de anuncio:</p>
          <textarea v-model="form.message" class="h-100 w-full border-2 pr-4 p-6 focus:outline-none"></textarea>
        </div>
        <RouterLink :to="{name:'announcements'}" class="p-3 flex justify-end">
          <PaperBin/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>