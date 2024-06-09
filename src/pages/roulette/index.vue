<script setup lang="ts">

import Ruleta from "@/pages/roulette/components/Ruleta.vue";
import CardRulette from "@/pages/roulette/components/CardRulette.vue";



</script>

<template>


  <div id="app" class="flex justify-center w-full gap-60 pt-10">
    <div class="pl-20">
      <Ruleta class="" :items="['A', 'B', 'C', 'D']" :size="400"/>
    </div>
    <div class="pr-20">
      <CardRulette class="bg-white rounded-2xl"/>
    </div>
  </div>


</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


  margin-top: 1px;


}
</style>


<style scoped>

</style>