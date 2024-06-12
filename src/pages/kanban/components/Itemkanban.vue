<script setup lang="ts">
import {computed} from "vue";
import {formatDateNumeric} from "@/vendor/utils/formats/formatDate";

const props = defineProps({
  name: String,
  description: String,
  priority: Number,
  student: String,
  lastUpdated: String,
  color: String
})

const dateFormated = computed(()=>formatDateNumeric(props.lastUpdated))
</script>

<template>
  <div class=" py-3 px-4 flex flex-col gap-5 rounded-xl drop-shadow-lg" :class="color">
    <div class="flex flex-col">
      <div class="flex justify-between text-md items-center">
        <p class="font-bold pb-2">{{ name }} </p>
        <p class="bg-green-500 px-2 py rounded-3xl">{{ priority }}px</p>
      </div>
      <p class="text-sm">{{ description }}</p>
    </div>
    <div class="flex justify-between text-xs">
      <p>
        {{student}}
      </p>
      <p>{{ dateFormated }}</p>
    </div>

  </div>
</template>

<style scoped>
.start{
  background: #e1ffca;
}
.inProgress{
  background: #fbf1cb;
}

.done{
  background: #f6d4d4;
}
</style>