<script setup lang="ts">
import CardKanban from "@/pages/kanban/components/CardKanban.vue";
import Itemkanban from "@/pages/kanban/components/Itemkanban.vue";
import {computed, ref} from "vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import CreateTaskModal from "@/pages/kanban/components/CreateTaskModal.vue";
import useShow from "@/vendor/useShow";

const draggedItem = ref(null);

const handleStart = (task) => {
  draggedItem.value = task;
};

const handleOver = (e) => {
  e.preventDefault();
};

const handleDrop = (column) => {
  if (draggedItem.value) {
    draggedItem.value.column = column;
  }
  draggedItem.value = null;
};

const handleEnd = () => {
  draggedItem.value = null;
};

const tasks = ref([
  {
    id: 1,
    column: 0,
    title: 'Diseñar Login1',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
  {
    id: 2,
    column: 0,
    title: 'Diseñar Login2',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
  {
    id: 4,
    column: 1,
    title: 'Diseñar Login',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
  {
    id: 5,
    column: 1,
    title: 'Diseñar Login',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
  {
    id: 7,
    column: 2,
    title: 'Diseñar Login',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
  {
    id: 8,
    column: 2,
    title: 'Diseñar Login',
    description: 'Diseñar las pantallas para el login del aplicativo.',
    ptj: 7,
    student: 'Angeles Castillo',
    date: '15-06-24'
  },
]);

const pendingTasks = computed(() => tasks.value.filter(item => item.column === 0));
const inProgressTasks = computed(() => tasks.value.filter(item => item.column === 1));
const doneTasks = computed(() => tasks.value.filter(item => item.column === 2));


const {show, handleShow} = useShow()
</script>

<template>
  <div class="flex justify-between gap-2 flex-wrap h-full w-[1000px] mx-auto">
    <div class="flex-1 flex flex-col items-center h-full">
      <CardKanban title="Pendiente" color="bg-[#a1dc77]"
                  class="w-full flex-grow"
                  @dragover="handleOver"
                  @drop="handleDrop(0)">
        <div class="flex flex-col gap-4">
          <Itemkanban
              v-for="task in pendingTasks" :key="task.id" v-bind="task"
              :draggable="true" @dragstart="handleStart(task)"
              @dragend="handleEnd"
              color="bg-[#e1ffca]"

          />
        </div>
      </CardKanban>
      <div class="h-20 flex items-center">
        <ButtonDefault @click="handleShow">+ Añadir Tarea</ButtonDefault>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center h-full">
      <CardKanban title="En progreso" color="bg-[#f7d24d]"
                  class="w-full flex-grow"
                  @dragover="handleOver"
                  @drop="handleDrop(1)">
        <div class="flex flex-col gap-4">
          <Itemkanban
              v-for="task in inProgressTasks" :key="task.id" v-bind="task"
              :draggable="true" @dragstart="handleStart(task)"
              @dragend="handleEnd"
              color="bg-[#fbf1cb]"
          />
        </div>
      </CardKanban>
      <div class="h-20 flex items-center"></div>
    </div>
    <div class="flex-1 flex flex-col items-center h-full">
      <CardKanban title="Hecho" color="bg-[#fa9598]"
                  class="w-full flex-grow"
                  @dragover="handleOver"
                  @drop="handleDrop(2)">
        <div class="flex flex-col gap-4">
          <Itemkanban
              v-for="task in doneTasks" :key="task.id" v-bind="task"
              :draggable="true" @dragstart="handleStart(task)"
              @dragend="handleEnd"
              color="bg-[#f6d4d4]"
          />
        </div>
      </CardKanban>
      <div class="h-20 flex items-center"></div>
    </div>


  </div>
  <CreateTaskModal v-model="show"/>
</template>

<style scoped>
</style>
