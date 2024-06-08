<script setup lang="ts">
import InputIcon from "@/vendor/components/InputIcon.vue";
import ViewOpen from "@/vendor/svg/ViewOpen.vue";
import ViewClose from "@/vendor/svg/ViewClose.vue";
import useShow from "@/vendor/useShow";
import {computed} from "vue";

const {show, handleShow} = useShow()

const showPassword = computed(() => show.value ? 'text' : 'password')
</script>

<template>
  <InputIcon :type="showPassword">
    <div @click="handleShow">
      <ViewOpen v-if="show"/>
      <ViewClose v-else/>
    </div>
  </InputIcon>
</template>

<style scoped>

</style>