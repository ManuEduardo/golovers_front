<script setup lang="ts">
import {ref} from "vue";

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
    <div class="relative px-4 flex items-center border border-gray-600 hover:border-indigo-700 rounded-md">
      <input
          ref="inputRef"
          :id="id"
          class="w-full py-2.5 placeholder-gray-600 focus:outline-none bg-transparent"
          v-model="model"
          :placeholder="placeholder"
          :type="type"
      />
      <div class="absolute right-4 top-2.5">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

@supports (-ms-ime-align:auto) {
  input[type="password"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
}

input[type="password"]::-webkit-contacts-auto-fill-button,
input[type="password"]::-webkit-credentials-auto-fill-button {
  display: none;
}
</style>