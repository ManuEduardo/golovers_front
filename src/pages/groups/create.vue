<script setup lang="ts">
import InputChat from "@/pages/announcements/components/InputChat.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import RadioButton from "@/vendor/components/RadioButton.vue";
import PlusCircle from "@/components/PlusCircle.vue";
import CreateLayout from "@/layouts/GroupsLayout/CreateLayout.vue";
</script>

<template>
  <CreateLayout>
    <div>
      <div class="flex justify-between gap-5">
        <div class="flex flex-col w-full gap-5 justify-center">
          <InputChat
              title="Nombre del Grupo"
              placeholder="Ingresa nombre del Grupo"
              type="text"/>
          <div class="p-4">
            <p class="mb-4">¿PERTENECE A ALGUN CURSO?</p>
            <div class="flex gap-10">
              <RadioButton id="r1" name="radio">SI</RadioButton>
              <RadioButton id="r2" name="radio">NO</RadioButton>
            </div>
          </div>
        </div>
        <div class="px-4">
          <p class="mb-3">INSERTE UNA IMAGEN</p>
          <div class="bg-gray-200 p-5 rounded-xl w-60 h-60 flex items-center justify-center">
            <PlusCircle/>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 mt-10">
        <InputChat
            title="Seleccionar Curso"
            type="text">

        </InputChat>
        <InputChat
            title="Seleccionar Estudiante"
            type="text">

        </InputChat>
        <div class="text-center">
          <ButtonDefault class="text-xl px-6 py-4">GUARAR CAMBIOS</ButtonDefault>
        </div>
      </div>
    </div>
  </CreateLayout>
</template>

<style scoped>

</style>