<script setup lang="ts">
import {ref} from "vue";
import ButtonRounded from "@/components/ButtonRounded.vue";

const model = defineModel()

type Props = {
  title?: string
  id?: string
  placeholder?: string
  type: string,
}

defineProps<Props>()

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({
  inputRef,
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <label :for="id" class="text-md ml-2">
      {{ title }}
    </label>
    <div class="py-2 relative pl-4 pr-1 flex items-center shadow-lg bg-white rounded-3xl">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-2.5 placeholder-gray-600 focus:outline-none"
          v-model="model"
          :placeholder="placeholder"
          :type="type"
      />
      <slot/>

    </div>
  </div>
</template>

<style scoped>
</style>