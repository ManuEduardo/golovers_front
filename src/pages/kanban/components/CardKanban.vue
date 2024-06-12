<script setup lang="ts">
defineProps({
  title:String,
  color:String
})

</script>

<template>
  <div class="bg-white min-h-64 flex flex-col gap-4 rounded-xl shadow pb-4 select-none">
    <div class="text-center py-2 rounded-md" :class="color">
      <p class="text-2xl font-bold px-2">{{title}}</p>
    </div>
    <div class="flex-grow px-6 py-2">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.start{
  background: #a1dc77;
}
.inProgress{
  background: #f7d24d;
}

.done{
  background: #fa9598;
}
</style>