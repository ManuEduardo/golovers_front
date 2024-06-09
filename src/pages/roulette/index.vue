<script setup lang="ts">

import Ruleta from "@/pages/roulette/components/Ruleta.vue";
</script>

<template>
  <div id="app">
    <Ruleta :items="['A', 'B', 'C', 'D', 'E', 'F']" :size="400"/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style scoped>

</style>