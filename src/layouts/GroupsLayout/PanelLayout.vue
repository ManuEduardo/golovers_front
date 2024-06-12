<script setup lang="ts">
import TabLink from "@/components/TabLink.vue";
import NavTabDefault from "@/layouts/components/NavTabDefault.vue";
import {onMounted, ref} from "vue";
import useKanban from "@/composables/useKanban";

const props = defineProps({
  idGroup: String,
  idKanban: String
})
const {getKanBanById} = useKanban()
const kanban_id = ref(0)
onMounted(async () => {
  const response = await getKanBanById(props.idGroup)
  kanban_id.value = response.data.id
})


</script>

<template>
  <div class=" flex flex-col h-full ">
    <NavTabDefault>
      <TabLink :to="{name:'panels', params:{idGroup:idGroup}}">PANEL DE CONTROL</TabLink>
      <TabLink :to="{name:'announcements'}">ANUNCIOS</TabLink>
      <TabLink :to="{name:'kanban', params:{idKanban:kanban_id}}">TABLERO KAMBAN</TabLink>
      <TabLink :to="{name: 'roulette'}">RULETA</TabLink>
    </NavTabDefault>
    <div class="flex-grow h-full overflow-y-scroll py-5">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>