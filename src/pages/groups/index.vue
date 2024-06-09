<script setup lang="ts">

import ImgGroup from "@/assets/img/groups/group1.png";
import CardGrup from "@/pages/groups/components/CardGrup.vue";
import CardAddGroup from "@/pages/groups/components/CardAddGroup.vue";
import TabLink from "@/components/TabLink.vue";
import useGroup from "@/composables/useGroup";

/*const groups = [
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
]*/

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