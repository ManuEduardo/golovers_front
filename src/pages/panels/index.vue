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

const list = [{
  id: 1,
  name: "Carlos",
  score: 80
}, {
  d: 2,
  name: "Leonardo",
  score: 100
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

const links = [{
  id: 1,
  name: "Whatsapp",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
}, {
  id: 2,
  name: "Canvas",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
}, {
  id: 3,
  nombre: "Link Imagenes",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
}]
</script>

<template>

  <div class="flex flex-wrap gap-4">
    <CardGroupControl class="flex-grow">
      <template #title>Integrantes</template>
      <div class="grid gap-4">
        <ItemUser v-for="item in list" :key="item.id" :name="item.name"/>
      </div>
    </CardGroupControl>

    <CardGroupControl class="w-112">
      <template #title> Contribucion de Estudiantes</template>
      <div class="grid gap-4">
        <Seeparticipation v-for="item in list" :key="item.id" :name="item.name"
                          :score="item.score"/>
      </div>
    </CardGroupControl>




    <CardGroupControl class="w-full">
      <template #title>TABLERO KAMBAN</template>
      <div class="flex gap-10">
        <CardKambanPanel class="w-1/2">
          <template #title>Pendiente</template>
          <div class="flex-col">
            <ItemTask v-for="item in doList" :key="item.id " :task="item.task"/>
          </div>
        </CardKambanPanel>

        <CardKambanPanel class="w-1/2">
          <template #title>Completado</template>
          <div class="flex-col">
            <ItemTask v-for="item in doneList" :key="item.id " :task="item.task"/>
          </div>
        </CardKambanPanel>
      </div>
    </CardGroupControl>


    <div class="flex justify-between w-full">
      <CardGroupControl class="w-100">
        <template #title>LINKS DE GRUPO</template>
        <div class="p-4">
          <ItemLink v-for="item in links" :key="item.id" :name="item.name" :link="item.link"/>
        </div>
      </CardGroupControl>
      <CardGroupControl class="w-100">
        <template #title>ANUNCIOS</template>
        <div class="bg-gray-100 p-4 rounded-xl">
          <PlusCircle/>
        </div>
      </CardGroupControl>
      <CardGroupControl class="w-100">
        <template #title>ASIGNACION DE ACTIVIDADES</template>
        <div class="p-4 flex justify-between items-center">
          <RulleteSvg class="w-30 h-30 P-5"/>
          <ButtonDefault class="shadow bg-main">APLICAR +</ButtonDefault>
        </div>
      </CardGroupControl>
    </div>

<!--    <CardGroupControl class="w-1/3">
      <template #title>LINKS DE GRUPO</template>
      <div class="p-4">
        <ItemLink v-for="item in links" :key="item.id" :name="item.name" :link="item.link"/>
      </div>
    </CardGroupControl>
    <CardGroupControl class="w-60">
      <template #title>ANUNCIOS</template>
      <div class="bg-gray-100 p-4 rounded-xl">
        <PlusCircle/>
      </div>
    </CardGroupControl>
    <CardGroupControl class="w-1/3">
      <template #title>LINKS DE GRUPO</template>
      <div class="p-4">
        <ItemLink v-for="item in links" :key="item.id" :name="item.name" :link="item.link"/>
      </div>
    </CardGroupControl>-->
  </div>
</template>

<style scoped>

</style>