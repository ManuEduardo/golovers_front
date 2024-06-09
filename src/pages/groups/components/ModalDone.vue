<script setup lang="ts">
import Modal from "@/vendor/components/Modal.vue";
import GroupSvg from "@/components/svg/GroupSvg.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";

const show = defineModel()

const handleShow = ()=>{
  show.value = !show.value;
}
</script>

<template>
  <Modal :show="show" @close="handleShow">
    <div class="bg-white text-center">
      <div class="w-80 mx-auto flex flex-col gap-10 py-20">
        <GroupSvg class=""/>
        <p class="text-xl">Tu grupo ha sido creado con éxito,
          podrás visualizarlo en la plataforma.</p>
        <ButtonDefault>
          Listo
        </ButtonDefault>
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>