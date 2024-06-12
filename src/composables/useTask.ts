import {TaskI, type TaskM} from "@/models/task";
import {ref} from "vue";
import {useTaskStore} from "@/stores/TaskStore";
import {storeToRefs} from "pinia";

export default () => {

    const store = useTaskStore()
    const {tasks} = storeToRefs(store)
    const {addTask, getAllTasksByKanban} = store

    const task = ref({...TaskI})

    const submitCreateTask = async () => {
        await addTask(task.value)
    }

    const getAllTasks = async ()=>{
        await getAllTasksByKanban()
    }

    return {
        tasks,
        task,
        submitCreateTask,
        getAllTasks
    }
}