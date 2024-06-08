<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div>
    <label class="bar" for="check">
      <input type="checkbox" id="check" v-model="model"/>

      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </label>
  </div>
</template>

<style scoped>
input[type = "checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.bar {
  display: block;
  position: relative;
  cursor: pointer;
  width: 30px;
  height:   24px;
  margin: auto;
}

.bar span {
  position: absolute;
  width: 28px;
  height: 4px;
  background: #f1faee;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
}

.bar span.top {
  top: 0;
}

.bar span.middle {
  top: 10px;
}

.bar span.bottom {
  bottom: 0;
}

input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 30px;
  left: 2px;
}

input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 30px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}

input[type]:checked ~ span.middle {
  transform: translateX(-10px);
  opacity: 0;
}
</style>