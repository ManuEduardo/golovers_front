<script setup lang="ts">


const list = [{
  id: 1,
  item:"A"
}, {
  d: 2,
  item:"B"
}, {
  id: 3,
  item:"C"
}, {
  id: 4,
  item:"D"
}]

</script>

<template>

  <div class="">
    <div class="px-10 py-4 text-center">
      <p>Designa a tus compañeros las
        actividades del trabajo:</p>
    </div>
    <div class="px-10 pt-2 ">
      <div v-for="item in list" :key="item.id" class="bg-[#f9f9f9] rounded-xl px-10 py-6 mb-2">
        <input type="text" :value="item.item" class="bg-transparent outline-none focus:ring-0 border-none text-center w-full py-2 leading-tight">

      </div>
    </div>

  </div>

</template>

<style scoped>

</style>