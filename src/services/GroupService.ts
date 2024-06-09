import axios from "axios";
import type {GroupM} from "@/models/group";

export const getListCurses = (id: number) => {
    try {
        const response = axios.get(`groups/list/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const registerCurses = (form: GroupM) => {
    try {
        const response = axios.post("groups/create", form)
        return response.data
    } catch (e) {

    }
}