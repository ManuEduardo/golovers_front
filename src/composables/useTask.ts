import {TaskI, type TaskM} from "@/models/task";
import {ref} from "vue";
import {useTaskStore} from "@/stores/TaskStore";
import {storeToRefs} from "pinia";
import useColumn from "@/composables/useColumn";

export default () => {

    const store = useTaskStore()
    const {tasks} = storeToRefs(store)
    const {addTask, getAllTasksByKanban, moveTask, moveFinishTask} = store

    const task = ref({...TaskI})
    const submitCreateTask = async () => {
        task.value = await addTask(task.value)
    }

    const getAllTasks = async ()=>{
        await getAllTasksByKanban()
    }

    const moveTaskColumn = async (task: TaskM) => {
        await moveTask(task)
    }

    const moveTaskFinish = async (task: TaskM)=>{
        await moveFinishTask(task)
    }

    return {
        tasks,
        task,
        submitCreateTask,
        getAllTasks,
        moveTaskColumn,
        moveTaskFinish
    }
}