<script setup lang="ts">
import Modal from "@/vendor/components/Modal.vue";
import InputChat from "@/pages/announcements/components/InputChat.vue";
import TextAreaCustom from "@/vendor/components/TextAreaCustom.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import ItemStudent from "@/pages/kanban/components/ItemStudent.vue";

const show = defineModel({default: false})

const handleShow = () => {
  show.value = false
}


const list = [
  {
    id: 1,
    name: 'Yopi',
    code: 'U11212'
  },
  {
    id: 2,
    name: 'Yopi',
    code: 'U11212'
  },
  {
    id: 3,
    name: 'Yopi',
    code: 'U11212'
  },
]
</script>

<template>
  <Modal :show="show" @close="handleShow" width="sm:w-[600px] md:w-[750px] lg:w-[950px] xl:w-[1050px]">
    <div class="bg-white flex">
      <div class="w-48 bg-clear-sky">
        <ItemStudent v-for="item in list" :key="item.id" v-bind="item"/>
      </div>
      <div class="flex-grow p-4">
        <h2 class="text-2xl border-b border-main text-main mt-2">Actividad</h2>
        <div class="py-7 flex flex-col gap-5">
          <InputChat
              placeholder="Escriba el nombre de la actividad"
              title="Nombre de actividad:"
              type="text"/>
          <div class="flex justify-end gap-5 mt-5">
            <InputChat
                title="Fecha de finalizacion"
                type="date"/>
            <InputChat
                title="Prioridad"
                type="number"/>
          </div>
          <TextAreaCustom title="Descripcion:"/>
          <div class="flex justify-end">
            <ButtonDefault>Agregar</ButtonDefault>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>