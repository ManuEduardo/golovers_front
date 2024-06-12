import {defineStore} from "pinia";
import {ref, type Ref} from "vue";
import type {TaskM} from "@/models/task";
import {createTask, findTasks, updateFinish, updateTask} from "@/services/TaskService";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

export const useTaskStore = defineStore("task", () => {
    const authStore = useAuthStore();
    const tasks: Ref<TaskM[]> = ref([])

    const router = useRouter()
    const addTask = async (task: TaskM) => {
        const id = parseInt(router.currentRoute.value.params.idKanban as string)
        const form: TaskM = {
            name: task.name,
            description: task.description,
            priority: task.priority,
            limitTime: `${task.limitTime}T00:00:00`,
            assignedUserId: authStore.authUser.id,
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

    const moveFinishTask = async (task: TaskM)=>{
        await updateFinish({id:task.id, columnKanbanId: task.columnKanbanId, finishUserId: authStore.authUser.id})
    }

    return {
        tasks,
        addTask,
        getAllTasksByKanban,
        moveTask,
        moveFinishTask
    }
})