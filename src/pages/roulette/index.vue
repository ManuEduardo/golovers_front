<script setup lang="ts">
import Ruleta from "@/pages/roulette/components/Ruleta.vue";
import CardRulette from "@/pages/roulette/components/CardRulette.vue";
import useTask from "@/composables/useTask";
import {onMounted} from "vue";

/*const {getAllTasks} = useTask()

onMounted(async ()=>{
  await getAllTasks()
})*/
import { ref } from 'vue';

interface Task {
  description: string;
}

const tasks = ref<Task[]>([
  { description: 'EDITA PRIMERO' },
  { description: 'EDITA SEGUNDO' },
  { description: 'EDITA TERCERO' },
  { description: 'EDITA CUARTO' }
]);


</script>

<template>
  <div id="app" class="flex justify-center w-full gap-60 pt-10">
    <div class="pl-20">
      <Ruleta :items="tasks" class="" :size="400"/>
    </div>
    <div class="pr-20">
      <CardRulette v-model="tasks" class="bg-white rounded-2xl"/>
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

