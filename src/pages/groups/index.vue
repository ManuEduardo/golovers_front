<script setup lang="ts">
import CardGrup from "@/pages/groups/components/CardGrup.vue";
import CardAddGroup from "@/pages/groups/components/CardAddGroup.vue";
import useGroup from "@/composables/useGroup";

const {groups} = useGroup()
</script>

<template>

  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 w-full py-4 ">
    <CardAddGroup class="min-h-80 "/>
    <CardGrup
        :to="{name:'panels', params:{idGroup:group.id}}"
        v-for="group in groups"
        :key="group.id"
        v-bind="group"
        class="min-h-80 "
    />
  </div>
</template>

<style scoped>

</style>