<script setup lang="ts">

import useShow from "@/vendor/useShow";

const {show, handleShow} = useShow()
</script>

<template>
  <div class="relative">
    <button @click="handleShow" type="button"
            class="flex items-center px-4 py-2 rounded-lg ">
      <slot name="trigger"/>
    </button>

    <!--    <Transition
            enter-active-class="ease-in duration-200"
            enter-from-class="opacity-70 translate-y-5"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
        </Transition>-->
    <div
        v-show="show"
        class="absolute bg-main text-white origin-bottom right-0 top-full rounded-lg shadow-lg px-3 py-1transition-all z-10  hover:scale-105"
    >
      <div class=" px-3 py-2 w-min mx-auto" @click="handleShow">
        <slot name="content"/>
      </div>
    </div>
    <Teleport to="body" v-if="show">
      <div class="fixed top-0 left-0 h-screen w-screen" @click="handleShow">
      </div>
    </Teleport>
  </div>
</template>

<style scoped>

</style>