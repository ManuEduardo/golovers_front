import axios from "axios";

export const findKanbans = async () => {
    try {
        const response = await axios.get(`kanban/list`)
        return response.data
    }catch (e){
        console.log(e)
    }

}

export const findKanbanById = async (id: number) => {
    try {
        const response = await axios.get(`kanban/list`)
        return response.data
    }catch (e){
        console.log(e)
    }
}