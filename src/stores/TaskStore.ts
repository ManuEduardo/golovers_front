import {defineStore} from "pinia";
import {ref, type Ref} from "vue";
import type {TaskM} from "@/models/task";
import {createTask, findTasks, updateTask} from "@/services/TaskService";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

export const useTaskStore = defineStore("task", () => {
    const authStore = useAuthStore();
    const tasks: Ref<TaskM[]> = ref([])

    const router = useRouter()
    const addTask = async (task: TaskM) => {
        const id = parseInt(router.currentRoute.value.params.idKanban as string)
        const form: TaskM = {
            ...task,
            assignedUserId: authStore.authUser.id,
            finishUserId: authStore.authUser.id,
            kanbanId: id
        }
        return await createTask(form)
    }

    const getAllTasksByKanban = async () => {
        const id = parseInt(router.currentRoute.value.params.idKanban as string)
        tasks.value = await findTasks(id)
    }

    const moveTask = async (task: TaskM) => {
        await updateTask(task)
    }

    return {
        tasks,
        addTask,
        getAllTasksByKanban,
        moveTask
    }
})