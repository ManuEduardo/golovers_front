<script setup lang="ts">
const model = defineModel()
defineProps({
  id: {
    type: String,
    default: "input"
  },
  label: {
    type: String,
    default: "Wenas"
  },
  type: {
    type: String,
    default: "text"
  }
})
</script>

<template>
  <div class="relative z-0">
    <input class="px-0 py-2.5 w-full border-b-2 border-gray-400 bg-transparent
    focus:outline-none appearance-none peer text-sm"
           v-model="model"
           :type="type" placeholder=" "/>
    <label class="absolute top-2 scale-75 left-0 -translate-y-6 transform duration-200 -z-10
    origin-[0] peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
           :for="id">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>

</style>