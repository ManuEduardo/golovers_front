<script setup lang="ts">

import UserSvg from "@/vendor/svg/UserSvg.vue";
import IconUserSvg from "@/vendor/svg/IconUserSvg.vue";
import InputIcon from "@/vendor/components/InputIcon.vue";
import ChatTarjetsComponent from "@/pages/announcements/components/ChatCardComponent.vue";
import InputChat from "@/pages/announcements/components/InputChat.vue";
import ChatNombreCurso from "@/pages/announcements/components/ChatNombreCurso.vue";
import TittleChat from "@/pages/announcements/components/TittleChat.vue";
import UserPerfile from "@/components/UserProfile.vue";
import CardGroupControl from "@/pages/panels/components/CardPanel.vue";
import ItemUser from "@/pages/panels/components/ItemUser.vue";
import Seeparticipation from "@/pages/panels/components/Seeparticipation.vue";
import ItemTask from "@/pages/panels/components/ItemTask.vue";
import ItemLink from "@/pages/panels/components/ItemLink.vue";
import MenuButton from "@/vendor/components/MenuButton.vue";
import CardAdvertisement from "@/components/CardAdvertisement.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import UserCard from "@/components/UserCard.vue";
import SideAnunce from "@/components/SideAnunce.vue";
import CardRulette from "@/pages/roulette/components/CardRulette.vue";


const list = [{
  id: 1,
  estudiante: "Carlos",
  participacion: 80
},{
  d: 2,
  estudiante: "Leonardo",
  participacion: 100
}]

const tasks = [{
  id: 1,
  actividad: "Redaccion Introduccion"
},{
  id: 2,
  actividad: "Redaccion Desarrollo"
},{
  id: 2,
  actividad: "Redaccion Cierre"
}]
const links = [{
  id: 1,
  nombre: "Whatsapp",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
},{
  id: 2,
  nombre: "Canvas",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
},{
  id: 3,
  nombre: "Link Imagenes",
  link: "https://www.youtube.com/watch?v=IuifpGl2sPk"
}]



</script>

<template>

<h1>Pruebitas</h1>

<!--  <chat-tarjets-component/>-->
<!--  <input-chat type="text" title="" placeholder="Escribe un anuncio ..."/>-->
<!--  <ChatNombreCurso>Curso: Calidad de Software</ChatNombreCurso>-->
<!--  <TittleChat>-->
<!--    <template #title>BANDEJA DE ANUNCION</template>-->
<!--    <template #subtitle>Interactua</template>-->
<!--  </TittleChat>-->
<!--  <UserPerfile user="Hola"/>-->

<!--  <CardGroupControl>-->
<!--    <template #title>Integrantes</template>-->
<!--    <ItemUser v-for="item in list" :key = "item.id" :nombre="item.estudiante"/>-->
<!--  </CardGroupControl>-->

<!--  <CardGroupControl>-->
<!--    <template #title> Contribucion de Estudiantes</template>-->
<!--    <Seeparticipation v-for="item in list" :key = "item.id" :nombre="item.estudiante" :participacion="item.participacion" />-->
<!--  </CardGroupControl>-->


<!--    <CardGroupControl>-->
<!--      <template #title>TABLERO KAMBAN</template>-->
<!--      <div class="flex gap-10">-->
<!--        <CardGroupControl class="w-1/2 bg-grayPanel" >-->
<!--          <template #title>PENDIENTE</template>-->
<!--          <div class="flex-col">-->
<!--            <ItemTask v-for="item in tasks" :key="item.id " :task="item.actividad" />-->
<!--          </div>-->
<!--        </CardGroupControl>-->

<!--        <CardGroupControl class="w-1/2 bg-grayPanel">-->
<!--          <template #title>COMPLETA</template>-->
<!--          <div class="flex-col">-->
<!--            <ItemTask v-for="item in tasks" :key="item.id " :task="item.actividad" />-->
<!--          </div>-->
<!--        </CardGroupControl>-->
<!--      </div>-->
<!--    </CardGroupControl>-->

<!--  <CardGroupControl>-->
<!--    <template #title>LINKS DE GRUPO</template>-->
<!--    <CardGroupControl class="bg-grayPanel">-->
<!--      <ItemLink v-for="item in links" :key="item.id" :nombre="item.nombre" :link="item.link"/>-->
<!--    </CardGroupControl>-->
<!--  </CardGroupControl>-->

<!--  <CardAdvertisement/>-->

  <UserCard #nombre>Leonardo</UserCard>


<!--  <SideAnunce ></SideAnunce>-->

  <CardRulette/>

</template>

<style scoped>

</style>