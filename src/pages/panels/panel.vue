<script setup lang="ts">
import CardGroupControl from "@/pages/panels/components/CardPanel.vue";
import ItemUser from "@/pages/panels/components/ItemUser.vue";
import Seeparticipation from "@/pages/panels/components/Seeparticipation.vue";
import ItemTask from "@/pages/panels/components/ItemTask.vue";
import ItemLink from "@/pages/panels/components/ItemLink.vue";
import PlusCircle from "@/components/PlusCircle.vue";
import CardKambanPanel from "@/pages/panels/components/CardKanbanPanel.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import RulleteSvg from "@/vendor/svg/RulleteSvg.vue";
import {computed, onMounted, type Ref, ref} from "vue";
import useGroup from "@/composables/useGroup";
import useKanban from "@/composables/useKanban";
import useColumn from "@/composables/useColumn";
import type {TaskM} from "@/models/task";

const props = defineProps({
  idGroup: String
})

const {members, findAllMembers} = useGroup()
const {getKanBanById, getScores} = useKanban()
const scores = ref([])

const doTasks: Ref<TaskM[]> = ref([])
const doneTasks: Ref<TaskM[]> = ref([])

const assignedColorScore = ref([])

onMounted(async () => {
  const response = await getKanBanById(props.idGroup)
  doTasks.value = response.columns[0].tasks
  doneTasks.value = response.columns[2].tasks

  await findAllMembers()

  const data = await getScores(response.data.id)
  console.log(data)

  let sum = 0
  for (let c of response.columns) {
    sum += c.tasks.reduce((accumulator, task) => accumulator + task.priority, 0);
  }

  let count = members.value.length;
  let aux = sum / count
  scores.value = members.value.map(m => {
    const score = data.find(d => d.studentId === m.id)
    const priority = score ? score.totalPriority : 0
    const por = priority / aux
    return {
      student: `${m.name} ${m.lastName}`,
      score: priority,
      por: por
    }
  })
})


const links = [
  {
    id: 1,
    name: "Whatsapp",
    link: "https://chat.whatsapp.com/CASpSdcoo7h6GBkQ6IoLlz"
  }, {
    id: 2,
    name: "Canvas",
    link: "https://chat.whatsapp.com/CASpSdcoo7h6GBkQ6IoLlz"
  }, {
    id: 3,
    nombre: "Link Imagenes",
    link: "https://chat.whatsapp.com/CASpSdcoo7h6GBkQ6IoLlz"
  }]

const doList = [
  {
    id: 1,
    task: "Redaccion Introduccion"

  },
  {
    id: 2,
    task: "Redaccion Desarrollo"
  },
  {
    id: 3,
    task: "Redaccion Cierre"
  }
]

const doneList = [
  {
    id: 1,
    task: "Redaccion Introduccion"

  },
  {
    id: 2,
    task: "Redaccion Desarrollo"
  },
  {
    id: 2,
    task: "Redaccion Cierre"
  }
]


</script>

<template>

  <div class="flex flex-wrap gap-4">
    <CardGroupControl class="flex-grow hover:bg-slate-100 transition">
      <template #title>Integrantes</template>
      <div class="grid gap-4">
        <ItemUser v-for="item in members" :key="item.id" :name="`${item.name} ${item.lastName} - ${(item.email.split('@')[0].toLocaleUpperCase())}`"/>
      </div>
    </CardGroupControl>

    <CardGroupControl class="w-112 hover:bg-slate-100 transition">
      <template #title> Contribucion de Estudiantes</template>
      <div class="grid gap-4">
        <Seeparticipation v-for="(item,idx) in scores" :key="idx" :name="item.student"
                          :score="item.score" :por="item.por"/>
      </div>
    </CardGroupControl>

    <!--    <CardGroupControl class="w-full">
          <template #title>TABLERO KAMBAN</template>
          <div class="flex gap-10">
            <CardKambanPanel class="w-1/2">
              <template #title>Pendiente</template>
              <div class="flex-col">
                <ItemTask v-for="(item, idx) in doTasks" :key="idx" :task="item.name"/>
              </div>
            </CardKambanPanel>

            <CardKambanPanel class="w-1/2">
              <template #title>Completado</template>
              <div class="flex-col">
                <ItemTask v-for="item in doneTasks" :key="item.id " :task="item.name"/>
              </div>
            </CardKambanPanel>
          </div>
<<<<<<< HEAD
        </CardGroupControl>-->
    <CardGroupControl class="w-full">
      =======
      </CardKambanPanel>
  </div>
  </CardGroupControl>-->
  <CardGroupControl class="w-full hover:bg-slate-100 transition">
    >>>>>>> 0421687f7686985cb10d9324c7660f570d18609e
    <template #title>TABLERO KAMBAN</template>
    <div class="flex gap-10">
      <CardKambanPanel class="w-1/2">
        <template #title>Pendiente</template>
        <div class="flex-col">
          <ItemTask v-for="item in doList" :key="item.id " :task="item.task"/>
        </div>
      </CardKambanPanel>

      <CardKambanPanel class="w-1/2 ">
        <template #title>Completado</template>
        <div class="flex-col">
          <ItemTask v-for="item in doneList" :key="item.id " :task="item.task"/>
        </div>
      </CardKambanPanel>
    </div>
  </CardGroupControl>

  <div class="flex justify-between w-full">
    <CardGroupControl class="w-100 hover:bg-slate-100 transition">
      <template #title>LINKS DE GRUPO</template>
      <div class="p-4">
        <ItemLink v-for="item in links" :key="item.id" :name="item.name" :link="item.link"/>
      </div>
    </CardGroupControl>
    <CardGroupControl class="w-100 hover:bg-slate-100 transition">
      <template #title>ANUNCIOS</template>
      <div class="bg-gray-100 p-4 rounded-xl">
        <PlusCircle/>
      </div>
    </CardGroupControl>
    <CardGroupControl class="w-100 hover:bg-slate-100 transition  ">
      <template #title>ASIGNACION DE ACTIVIDADES</template>
      <div class="p-4 flex justify-between items-center">
        <RulleteSvg class="w-30 h-30 P-5"/>
        <ButtonDefault class="shadow bg-main">APLICAR +</ButtonDefault>
      </div>
    </CardGroupControl>
  </div>
  </div>
</template>

<style scoped>

</style>