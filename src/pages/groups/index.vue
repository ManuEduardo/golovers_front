<script setup lang="ts">
import CardGrup from "@/pages/groups/components/CardGrup.vue";
import CardAddGroup from "@/pages/groups/components/CardAddGroup.vue";
import useGroup from "@/composables/useGroup";
import {onMounted} from "vue";

const {groups, getAllGroups} = useGroup()

onMounted(async () => {
  await getAllGroups()
})
</script>

<template>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full py-4 ">
    <CardAddGroup class="min-h-60 hover:scale-105 transition"/>
    <CardGrup
        :to="{name:'panels', params:{idGroup:group.id}}"
        v-for="group in groups"
        :key="group.id"
        v-bind="group"
        class="min-h-60 hover:scale-105 transition"
    />
  </div>
</template>

<style scoped>

</style>