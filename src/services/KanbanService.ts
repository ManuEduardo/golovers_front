import axios from "axios";

export const findKanbans = async () => {
    try {
        const response = await axios.get(`kanban/list`)
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

export const findFive = async (id: number) => {
    try{
        const response = await axios.get(`kanban/five/${id}`)
        return response.data
    }catch (e){

    }
}

export const findScoreStudents = async (id: number) => {
    try{
        const response = await axios.get(`kanban/participation/${id}`)
        return response.data
    }catch (e){

    }
}