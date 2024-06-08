<script setup lang="ts">
import {ref} from "vue";
import ButtonRounded from "@/components/ButtonRounded.vue";

const model = defineModel()

type Props = {
  title?: string
  id?: string
  placeholder?:string
  type:string
}

defineProps<Props>()

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({
  inputRef,
});
</script>

<template>
  <div class="border-t-2 border-gray-300 flex flex-col">
    <label :for="id" class="text-sm font-bold">
      {{ title }}
    </label>
    <div class="py-1 relative pl-4 pr-1 flex items-center">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-2.5 placeholder-gray-600 focus:outline-none"
          v-model="model"
          :placeholder="placeholder"
          :type="type"
      />
      <ButtonRounded>ANUNCIAR</ButtonRounded>
    </div>
  </div>
</template>

<style scoped>
</style>