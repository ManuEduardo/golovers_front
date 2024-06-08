<script setup lang="ts">

import ImgGroup from "@/assets/img/groups/group1.png";
import CardGrup from "@/components/grupos/CardGrup.vue";
import CardAddGroup from "@/pages/groups/components/CardAddGroup.vue";
import TabLink from "@/components/TabLink.vue";

const groups = [
  {
    id: "A4W6F",
    img: ImgGroup,
    group: "GROUP CALI",
    curse: "CALIDAD DE SOFTWARE",
    description: "Juntos por un mundo mejor",
  },
  {
    id: "A4W61",
    img: ImgGroup,
    group: "GROUP CALI",
    curse: "CALIDAD DE SOFTWARE",
    description: "Juntos por un mundo mejor",
  },
  {
    id: "A4W62",
    img: ImgGroup,
    group: "GROUP CALI",
    curse: "CALIDAD DE SOFTWARE",
    description: "Juntos por un mundo mejor",
  }
]
</script>

<template>

  <div class="flex h-full">
    <div class="flex-grow px-16 py-5">
      <div class="flex gap-4">
        <TabLink>GRUPOS ACTIVOS</TabLink>
        <TabLink>GRUPOS ARCHIVADOS</TabLink>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 w-full py-4 ">
        <CardAddGroup class="min-h-80 "/>
        <CardGrup
            v-for="group in groups"
            :key="group.id"
            v-bind="group"
            class="min-h-80 "
        />
      </div>
    </div>
    <div class="w-80 px-6 flex-shrink-0">

    </div>
  </div>
</template>

<style scoped>

</style>