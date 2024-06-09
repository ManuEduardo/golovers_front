<script setup lang="ts">
import InputChat from "@/pages/announcements/components/InputChat.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import RadioButton from "@/vendor/components/RadioButton.vue";
import PlusCircle from "@/components/PlusCircle.vue";
import CreateLayout from "@/layouts/GroupsLayout/CreateLayout.vue";
import ModalDone from "@/pages/groups/components/ModalDone.vue";
import useGroup from "@/composables/useGroup";
import useStudent from "@/composables/useStudent";
import InputRoundedSearch from "@/vendor/components/InputRoundedSearch.vue";
import ContentRounded from "@/vendor/components/ContentRounded.vue";


const {form, errors, submitCreate} = useGroup()
const {email, studentsList, addStudent, deleteStudent} = useStudent()
</script>

<template>
  <CreateLayout>
    <div>
      <div class="flex justify-between gap-5">
        <div class="flex flex-col w-full gap-5 justify-center">
          <InputChat
              title="Nombre del Grupo"
              placeholder="Ingresa nombre del Grupo"
              v-model="form.name"
              type="text"/>
          <div class="p-4">
            <p class="mb-4">¿PERTENECE A ALGUN CURSO?</p>
            <div class="flex gap-10">
              <RadioButton v-model="form.hasClass" id="r1" name="radio" :value="true">SI</RadioButton>
              <RadioButton v-model="form.hasClass" id="r2" name="radio" :value="false" checked>NO</RadioButton>
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

      <div v-if="form.hasClass" class="flex flex-col gap-10 mt-10">
        <InputChat
            title="Seleccionar Curso"
            type="text"
            v-model="form.className"
        >

        </InputChat>
        <InputRoundedSearch
            title="Seleccionar Estudiante"
            v-model="email"
            type="text"
            @search="addStudent"
        />
        <div class="p-4">
          <p class="text-lg pb-3">Agregar Integrantes</p>
          <div>
            <ContentRounded v-for="item in studentsList" :key="item.id">
              <template #info>{{item.name}}</template>
              <button class="text-blue-600" @click="deleteStudent(item.id)">Eliminar</button>
            </ContentRounded>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <ButtonDefault @click="submitCreate" class="text-xl px-6 py-4">GUARAR CAMBIOS</ButtonDefault>
      </div>
    </div>
    <ModalDone/>
  </CreateLayout>
</template>

<style scoped>

</style>