import axios from "axios";

export const getKanbanService = () => {

    try {
        const response = axios.get(`kanban/participation`)
        return response.data
    }catch (e){
        console.log(e)
    }

}