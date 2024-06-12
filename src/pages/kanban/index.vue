<script setup lang="ts">
import CardKanban from "@/pages/kanban/components/CardKanban.vue";
import Itemkanban from "@/pages/kanban/components/Itemkanban.vue";
import {computed, onMounted, ref} from "vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import CreateTaskModal from "@/pages/kanban/components/CreateTaskModal.vue";
import useShow from "@/vendor/useShow";
import useKanban from "@/composables/useKanban";
import useColumn from "@/composables/useColumn";
import useTask from "@/composables/useTask";
import {findStudentById} from "@/services/StudentService";
import useGroup from "@/composables/useGroup";

const props = defineProps({
  idGroup: String,
  idKanban: String
})

const {getKanBanById, kanban} = useKanban()
const {columns} = useColumn()
const {moveTaskColumn} = useTask()
const {members, findAllMembers} = useGroup()
onMounted(async () => {
  await findAllMembers()
  const response = await getKanBanById(props.idGroup)
  kanban.value = response.data
  columns.value = response.columns
})

const draggedItem: any = ref(null);

const handleStart = (idxTask: number, idxColumn: number) => {
  draggedItem.value = {idxTask: idxTask, idxColumn: idxColumn}
};

const handleOver = (e: any) => {
  e.preventDefault();
};

const handleDrop = async (idx: number) => {
  if (draggedItem.value) {
    const idxColumnOrigin = draggedItem.value.idxColumn;
    const idxTask = draggedItem.value.idxTask;
    const task = columns.value[idxColumnOrigin].tasks[idxTask]
    task.columnKanbanId = columns.value[idx].id
    columns.value[idxColumnOrigin].tasks.splice(idxTask, 1);
    columns.value[idx].tasks.push(task)
    await moveTaskColumn({id: task.id, oderColumn: idx + 1})
  }
  draggedItem.value = null;
};

const handleEnd = () => {
  draggedItem.value = null;
};


const {show, handleShow} = useShow()

const columnTitleSpanish = ['Pendiente', 'En Proreso', 'Hecho']
const columnColorClass = ['start', 'inProgress', 'done']


const getNameStudent = (id: number) => {
  const student =  members.value.find(item=>item.id === id)
  return `${student.name} ${student.lastName}`
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between gap-3 h-full w-full mx-auto">
      <div v-for="(column, idxColumn) in columns" :key="column.id"
           class="flex-1 flex flex-col items-center h-max">
        <CardKanban :title="columnTitleSpanish[idxColumn]" :color="columnColorClass[idxColumn]"
                    class="w-full min-w-60 max-w-96 h-full flex-grow"
                    @dragover="handleOver"
                    @drop="handleDrop(idxColumn)">
          <div class="flex flex-col gap-4">
            <Itemkanban v-for="(task, idxTask) in column.tasks" :key="task.id" v-bind="task"
                        :draggable="true"
                        @dragstart="handleStart(idxTask, idxColumn)" @dragend="handleEnd"
                        :color="columnColorClass[idxColumn]"
                        :student="getNameStudent(1)"
            />
          </div>
        </CardKanban>
      </div>
    </div>
    <div class="block w-max mr-o ml-auto mt-4">
      <ButtonDefault @click="handleShow">+ Añadir Tarea</ButtonDefault>
    </div>
  </div>

  <CreateTaskModal v-model="show" v-model:column="columns[0]"/>
</template>

<style scoped></style>
