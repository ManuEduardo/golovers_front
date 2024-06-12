import {defineStore} from "pinia";
import {ref, type Ref} from "vue";
import type {TaskM} from "@/models/task";
import {createTask, findTasks} from "@/services/TaskService";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

export const useTaskStore = defineStore("task", () => {
    const authStore = useAuthStore();
    const tasks: Ref<TaskM[]> = ref([])

    const router = useRouter()
    const addTask = async (task: TaskM) => {
        const id = parseInt(router.currentRoute.value.params.idGroup as string)
        const form: TaskM = {
            ...task,
            assignedUserId: authStore.authUser.id,
            finishUserId: authStore.authUser.id,
            columnKanbanId: id,
            kanbanId: id
        }
        await createTask(form)
    }

    const getAllTasksByKanban = async ()=>{
        const id = parseInt(router.currentRoute.value.params.idGroup as string)
        tasks.value = await findTasks(id)
    }
    return {
        tasks,
        addTask,
        getAllTasksByKanban
    }
})