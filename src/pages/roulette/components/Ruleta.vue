<template>
  <div>
    <canvas ref="canvas" :width="size" :height="size"></canvas>
    <button @click="spin">GIRAR</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  size: {
    type: Number,
    default: 300
  }
})

const canvas = ref(null)
const context = ref(null)
const arc = (2 * Math.PI) / props.items.length
const startAngle = ref(0)
const spinTime = ref(0)
const spinTimeTotal = ref(0)

const spinAngleStart = Math.random() * 10 + 10
const spinTimeout = ref(null)

const drawRouletteWheel = () => {
  const canvasEl = canvas.value
  context.value = canvasEl.getContext('2d')
  const outsideRadius = props.size / 2 - 10
  const textRadius = props.size / 2 - 50
  const insideRadius = 20

  context.value.clearRect(0, 0, props.size, props.size)
  context.value.strokeStyle = 'black'
  context.value.lineWidth = 2

  context.value.font = 'bold 14px Helvetica, Arial'

  for (let i = 0; i < props.items.length; i++) {
    const angle = startAngle.value + i * arc
    context.value.fillStyle = getColor(i, props.items.length)

    context.value.beginPath()
    context.value.arc(props.size / 2, props.size / 2, outsideRadius, angle, angle + arc, false)
    context.value.arc(props.size / 2, props.size / 2, insideRadius, angle + arc, angle, true)
    context.value.stroke()
    context.value.fill()

    context.value.save()
    context.value.fillStyle = 'white'
    context.value.translate(props.size / 2 + Math.cos(angle + arc / 2) * textRadius, props.size / 2 + Math.sin(angle + arc / 2) * textRadius)
    context.value.rotate(angle + arc / 2 + Math.PI / 2)
    const text = props.items[i]
    context.value.fillText(text, -context.value.measureText(text).width / 2, 0)
    context.value.restore()
  }
}

const getColor = (item, maxItem) => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#57FF33', '#5733FF', '#FF33A6']
  return colors[item % colors.length]
}

const rotateWheel = () => {
  spinTime.value += 30
  if (spinTime.value >= spinTimeTotal.value) {
    stopRotateWheel()
    return
  }
  const spinAngle = spinAngleStart - easeOut(spinTime.value, 0, spinAngleStart, spinTimeTotal.value)
  startAngle.value += (spinAngle * Math.PI) / 180
  drawRouletteWheel()
  spinTimeout.value = setTimeout(rotateWheel, 30)
}

const easeOut = (t, b, c, d) => {
  const ts = (t /= d) * t
  const tc = ts * t
  return b + c * (tc + -3 * ts + 3 * t)
}

const stopRotateWheel = () => {
  clearTimeout(spinTimeout.value)
  const degrees = (startAngle.value * 180) / Math.PI + 90
  const arcd = (arc * 180) / Math.PI
  const index = Math.floor((360 - (degrees % 360)) / arcd)
  alert(`Ganaste: ${props.items[index]}`)
}

const spin = () => {
  spinTime.value = 0
  spinTimeTotal.value = Math.random() * 1000 + 10 * 1000
  rotateWheel()
}

onMounted(() => {
  drawRouletteWheel()
})
</script>

<style scoped>
canvas {
  border: 1px solid black;
  border-radius: 50%;
}
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
