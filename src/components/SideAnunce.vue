<script setup lang="ts">

import ViewClose from "@/vendor/svg/ViewClose.vue";
import PaperBin from "@/vendor/svg/PaperBin.vue";
import InfoSvg from "@/vendor/svg/InfoSvg.vue";
import HomeSvg from "@/vendor/svg/HomeSvg.vue";
import NavBar from "@/layouts/AuthLayout/components/NavBar.vue";



import MenuButton from "@/vendor/components/MenuButton.vue";
import {ref} from "vue";

const anuncios = [{
  id: 1,
  titulo: "Matematica",
  anuncio: "Actividad Creada"
},{
  id: 2,
  titulo: "Integrador",
  anuncio: "Actividad Creada"
},{
  id: 3,
  titulo: "SOA",
  anuncio: "Actividad Creada"
}]

</script>


<template>

  <div>
    <div class="bg-main flex text-white p-5 font-bold rounded-t-2xl">
      <MenuButton class=" w-16"/>
      <p>Anuncios</p>
    </div>


    <div class="w-full h-full p-5 ">
      <div v-for="item in anuncios" :key="item.id" class="p-2 border-xl">
        <div class="bg-[#f1f8fe] px-6 py-5 rounded-xl">
          <p class="text-fuchsia-600 text-xs">Nuevas</p>
          <h1 class="font-bold">{{ item.titulo }}</h1>
          <p class="text-xs pt-2">{{ item.anuncio }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>