<template>
  <div >
    <canvas ref="canvas" :width="size" :height="size"></canvas>
    <button @click="spin" class="bg-main rounded-md text-white">GIRAR</button>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import useTask from "@/composables/useTask";

const {tasks} = useTask()

const props = defineProps({
  size: {
    type: Number,
    default: 300
  }
})

const canvas = ref(null)
const context = ref(null)
const arc = (2 * Math.PI) / tasks.value.length
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

  for (let i = 0; i < tasks.value.length; i++) {
    const angle = startAngle.value + i * arc
    context.value.fillStyle = getColor(i, tasks.value.length)

    context.value.beginPath()
    context.value.arc(props.size / 2, props.size / 2, outsideRadius, angle, angle + arc, false)
    context.value.arc(props.size / 2, props.size / 2, insideRadius, angle + arc, angle, true)
    context.value.stroke()
    context.value.fill()

    context.value.save()
    context.value.fillStyle = 'white'
    context.value.translate(props.size / 2 + Math.cos(angle + arc / 2) * textRadius, props.size / 2 + Math.sin(angle + arc / 2) * textRadius)
    context.value.rotate(angle + arc / 2 + Math.PI / 2)
    const text = tasks.value[i].name
    context.value.fillText(text, -context.value.measureText(text).width / 2, 0)
    context.value.restore()
  }


  context.value.fillStyle = '#2c3247';
  context.value.strokeStyle = 'white';
  context.value.lineWidth = 1;
  context.value.beginPath();
  context.value.moveTo(props.size / 2 - 10, 10);
  context.value.lineTo(props.size / 2 + 10, 10);
  context.value.lineTo(props.size / 2, 30);
  context.value.closePath();
  context.value.fill();
  context.value.stroke();

}

const getColor = (item, maxItem) => {
  const colors = ['#d87979', '#17c59b', '#68bdcf', '#ffcb12', '#5733FF', '#FF33A6']
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
  alert(`Ganaste: ${tasks.value[index]}`)
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
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  display: block;
  margin: auto;
}
.pointer {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid rgba(255, 255, 255, 0);
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
}
</style>


