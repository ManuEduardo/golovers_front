<script setup lang="ts">
const model = defineModel({default: ''})
defineProps({
  title: String
})
</script>

<template>

  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">{{ title }}</label>
    <textarea id="message" rows="4"
              v-model="model"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
              placeholder-gray-600 focus:outline-none bg-transparent shadow shadow-gray-400 resize-none h-60"
              placeholder="Escribe una descripcion">

  </textarea>
  </div>

</template>

<style scoped>
</style>