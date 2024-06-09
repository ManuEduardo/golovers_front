<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  moreClass: {
    type: String,
    default: ''
  },
  closeable: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'sm:w-[600px] md:w-[750px] xl:w-[850px]'
  },
  height: {
    type: String
  }
})

const emits = defineEmits(['close'])
watch(
    () => props.show,
    () => {
      if (props.show) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = null
      }
    }
)

const close = () => {
  emits('close')
}

const closeOnEscape = (e) => {
  if (e.key === 'Escape' && props.show) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', closeOnEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape)
  document.body.style.overflow = null
})
</script>

<template>
  <Teleport to="body">
    <Transition leave-active-class="duration-200">
      <div v-show="show" class="fixed inset-0 overflow-hidden z-50">
        <div class="flex py-4 max-h-full">
          <Transition
              enter-active-class="ease-out duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
          >
            <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
              <div class="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
          </Transition>

          <Transition
              enter-active-class="ease-out duration-300"
              enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
                v-if="show"
                class="rounded-xl overflow-hidden shadow-xl duration-500 mx-auto relative w-[95%]"
                :class="`${width ?? 'sm:w-[600px] md:w-[750px] xl:w-[850px]'} ${height}`"
            >
              <slot v-if="show" />
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
