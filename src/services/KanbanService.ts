import axios from "axios";

export const findKanbans = async () => {
    try {
        const response = await axios.get(`kanban/list`)
        console.log(response.data)
        return response.data
    } catch (e) {
        console.log(e)
    }

}

export const findKanbanByGroupId = async (id: number) => {
    try {
        const response = await axios.get(`kanban/list/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}