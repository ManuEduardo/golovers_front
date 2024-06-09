<script setup lang="ts">
import MenuButton from "@/vendor/components/MenuButton.vue";
import HamburgueseSvg from "@/vendor/svg/HamburgueseSvg.vue";
import { ref } from "vue";

const anuncios = [{
  id: 1,
  titulo: "Matematica",
  anuncio: "Actividad Creada"
}, {
  id: 2,
  titulo: "Integrador",
  anuncio: "Actividad Creada"
}, {
  id: 3,
  titulo: "SOA",
  anuncio: "Actividad Creada"
}]

const isOpen = ref(true)

const changeIsOpen = () =>{
  isOpen.value = !isOpen.value
}
</script>


<template>
  <div class="bg-white shadow-lg shadow-gray-400 mt-auto mb-0 w-max min-w-80 h-max overflow-hidden">
    <div class="bg-main flex text-white p-5 font-bold rounded-t-2xl gap-4 items-center">
      <HamburgueseSvg class="w-7 hover:scale-105 transition" stroke="stroke-white" @click="changeIsOpen"/>
      <p>Anuncios</p>
    </div>

    <div class="w-full h-max p-5" v-if="isOpen">
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