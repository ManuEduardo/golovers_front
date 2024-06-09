<script setup lang="ts">
import InputChat from "@/pages/announcements/components/InputChat.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
</script>

<template>
  <div class="mt-4">
    <p></p>
    <div>
      <div class="flex justify-between">
        <div class="flex flex-col w-full">
          <InputChat
              title="Nombre del Grupo"
              placeholder="Ingresa nombre del Grupo"
              type="text"/>
        </div>
        <div></div>
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <InputChat
            title="Seleccionar Curso"
            type="text"/>
        <InputChat
            title="Seleccionar Estudiante"
            type="text"/>
        <div class="text-center">
          <ButtonDefault>GUARAR CAMBIOS</ButtonDefault>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>