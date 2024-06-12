<script setup lang="ts">
import CardKanban from "@/pages/kanban/components/CardKanban.vue";
import Itemkanban from "@/pages/kanban/components/Itemkanban.vue";
import {computed, onMounted, ref} from "vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import CreateTaskModal from "@/pages/kanban/components/CreateTaskModal.vue";
import useShow from "@/vendor/useShow";
import useKanban from "@/composables/useKanban";
import useColumn from "@/composables/useColumn";

const props = defineProps({
  idGroup: Number
})

const {getKanBanById, kanban} = useKanban()
const {columns} = useColumn()


onMounted(async ()=>{
  const response = await getKanBanById(props.idGroup)
  kanban.value = response.data
  columns.value = response.columns
})

const draggedItem:any = ref(null);

const handleStart = (idxTask:number, idxColumn:number) => {
  draggedItem.value = {id: idxTask, idxColumn: idxColumn}
};

const handleOver = (e: any) => {
  e.preventDefault();
};

const handleDrop = (idx: number) => {
  if (draggedItem.value) {
    console.log(idx, draggedItem.value);
  }
  draggedItem.value = null;
};

const handleEnd = () => {
  draggedItem.value = null;
};


const { show, handleShow } = useShow()

const columnTitles = ['start', 'inProgress', 'done']
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between gap-3 h-full w-full mx-auto">
      <div v-for="(column, idxColumn) in columns" :key="column.id"
          class="flex-1 flex flex-col items-center h-max">
        <CardKanban :title="column.title" :color="columnTitles[idxColumn]"
                    class="w-full min-w-60 max-w-96 h-full flex-grow"
                    @dragover="handleOver"
                    @drop="handleDrop(idxColumn)">
          <div class="flex flex-col gap-4">
            <Itemkanban v-for="(task, idxTask) in column.tasks" :key="task.id" v-bind="task"
                        :draggable="true"
                        @dragstart="handleStart(idxTask, idxColumn)" @dragend="handleEnd" :color="columnTitles[idxColumn]" />
          </div>
        </CardKanban>
      </div>
    </div>
    <div class="block w-max mr-o ml-auto">
      <ButtonDefault @click="handleShow">+ Añadir Tarea</ButtonDefault>
    </div>
  </div>

  <CreateTaskModal v-model="show" />
</template>

<style scoped></style>
