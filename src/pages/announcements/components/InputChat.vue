<script setup lang="ts">
import {ref} from "vue";

const model = defineModel()

type Props = {
  title?: string
  id?: string
  placeholder?: string
  type?: string,
}

defineProps<Props>()

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({
  inputRef,
});

</script>

<template>
  <div class="flex flex-col item gap-4">
    <label :for="id" class="text-md ml-2">
      {{ title }}
    </label>
    <div class="relative max-w-lg flex items-center shadow bg-gray-200 rounded-2xl">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-3 px-3 placeholder-gray-400 rounded-2xl focus:outline-none bg-transparent focus:bg-sky-100/20 focus:shadow-md"
          v-model="model"
          :placeholder="placeholder"
          :type="type"
      />
      <slot/>

    </div>
  </div>

<!--  <div class="flex flex-col gap-2">
    <label :for="id" class="text-md ml-2">
      {{ title }}
    </label>
    <div class="py-2 relative pl-4 pr-1 flex items-center shadow-lg bg-gray-100 rounded-3xl">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-2.5 placeholder-gray-600 focus:outline-none bg-transparent"
          v-model="model"
          :placeholder="placeholder"
          :type="type"
      />
      <slot/>

    </div>
  </div>-->

</template>

<style scoped>
</style>