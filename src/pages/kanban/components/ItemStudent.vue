<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue";

defineProps({
  name:String,
  code:String
})
</script>

<template>
  <div class="flex gap-3 p-3">
    <UserProfile :name="name"/>
    <div class="">
      <p>{{name}}</p>
      <p>{{code}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>