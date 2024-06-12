<script setup lang="ts">
import Modal from "@/vendor/components/Modal.vue";
import InputChat from "@/pages/announcements/components/InputChat.vue";
import TextAreaCustom from "@/vendor/components/TextAreaCustom.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import ItemStudent from "@/pages/kanban/components/ItemStudent.vue";
import useGroup from "@/composables/useGroup";
import {onMounted} from "vue";
import useTask from "@/composables/useTask";

const show = defineModel({default: false})

const handleShow = () => {
  show.value = false
}

const {members, findAllMembers} = useGroup()
const {task, submitCreateTask} = useTask()

onMounted(async () => {
  await findAllMembers()
})

const submitForm = ()=>{
  submitCreateTask()
  handleShow()
}
</script>

<template>
  <Modal :show="show" @close="handleShow" width="sm:w-[600px] md:w-[750px] lg:w-[950px] xl:w-[1050px]">
    <div class="bg-white flex">
      <div class="w-48 bg-clear-sky">
        <ItemStudent v-for="item in members" :key="item.id" :name="item.name" :code="item.email.split('@')[0]"/>
      </div>
      <div class="flex-grow p-4">
        <h2 class="text-2xl border-b border-main text-main mt-2">Actividad</h2>
        <div class="py-7 flex flex-col gap-5">
          <InputChat
              placeholder="Escriba el nombre de la actividad"
              title="Nombre de actividad:"
              v-model="task.name"
              type="text"/>
          <div class="flex justify-end gap-5 mt-5">
            <InputChat
                title="Fecha de finalizacion"
                v-model="task.limitTime"
                type="date"/>
            <InputChat
                v-model="task.priority"
                title="Prioridad"
                type="number"/>
          </div>
          <TextAreaCustom
              v-model="task.description"
              title="Descripcion:"/>
          <div class="flex justify-end">
            <ButtonDefault @click="submitForm">Agregar</ButtonDefault>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>