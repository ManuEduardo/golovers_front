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
import {useRouter} from "vue-router";


const {form, errors, submitCreate, show} = useGroup()
const {email, studentsList, addStudent, deleteStudent} = useStudent()

const route = useRouter()

const close = ()=>{
  show.value = false
  route.push({name:'groups'})
}
</script>

<template>
  <CreateLayout>
    <div>
      <div class="flex justify-between gap-5">

        <div class="flex flex-col w-full gap-5 justify-center">
          <InputChat
              title="Nombre del Grupo"
              placeholder="Nombre del Grupo"
              v-model="form.name"
              type="text"/>
          <div class="p-4">
            <p class="mb-4">¿EL GRUPO PERTENECE A ALGUN CURSO?</p>
            <div class="flex gap-10">
              <RadioButton v-model="form.hasClass" id="r1" name="radio" :value="true">SI</RadioButton>
              <RadioButton v-model="form.hasClass" id="r2" name="radio" :value="false" checked>NO</RadioButton>
            </div>
          </div>
        </div>

        <div class="px-4">
          <p class="mb-3">INSERTE UNA IMAGEN</p>
          <div class="bg-gray-200 p-5 rounded-xl md:h-44 md:w-44 xl:h-60 xl:w-60  flex items-center justify-center  hover:scale-105 transition">
            <PlusCircle/>
          </div>
        </div>
      </div>

      <div v-if="form.hasClass" class="flex flex-col gap-10 mt-10">
        <InputChat
            title="Seleccionar Curso"
            type="text"
            v-model="form.className"
            placeholder="Nombre del curso"
        >

        </InputChat>
        <p class="text-lg">Agregar Integrantes</p>
        <InputRoundedSearch
            title="Ingresa el código o nombre del estudiante que desea agregar"
            v-model="email"
            type="text"
            @search="addStudent"
            placeholder="Nombre o código del estudiante"
        />
        <div class="px-4 pb-4">
          <div>
            <ContentRounded v-for="item in studentsList" :key="item.id">
              <template #info>{{`${item.name} ${item.lastName} - ${item.email.split("@")[0]}`}}</template>
              <button class="text-blue-600" @click="deleteStudent(item.id)">
                <svg class="w-8 h-8 text-red-800 hover:scale-105 transition mx-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                </svg>

              </button>
            </ContentRounded>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <ButtonDefault @click="submitCreate" class="text-xl px-6 py-4 hover:scale-105 transition">GUARAR CAMBIOS</ButtonDefault>
      </div>
    </div>
    <ModalDone :show="show" @close="close"/>
  </CreateLayout>
</template>

<style scoped>

</style>