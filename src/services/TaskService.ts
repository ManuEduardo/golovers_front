import type {TaskM} from "@/models/task";
import axios from "axios";

export const createTask = async (task: TaskM) => {
    try {
        const response = await axios.post("task/create", task);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const findTasks = async (id:number) => {
    try {
        const response = await axios.get(`task/findByKanbanId/${id}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const moveTask = async (task: TaskM) => {
    try {
        const response = await axios.post("/task/update", task);
        return response.data
    } catch (error) {
        console.log(error)
    }
}