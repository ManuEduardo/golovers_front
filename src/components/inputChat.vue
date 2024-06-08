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
  <div class="">
    <label :for="id" class="text-sm font-bold">
      {{ title }}
    </label>
    <div class="py-1 relative pl-4 pr-1  flex items-center border border-gray-600 hover:border-indigo-700 rounded-2xl">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-2.5 placeholder-gray-600 focus:outline-none bg-transparent"
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