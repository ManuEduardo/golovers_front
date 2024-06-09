import axios from "axios";
import type {GroupM} from "@/models/group";
import type {MenberM} from "@/models/member";

export const getListCurses = (code: string) => {
    try {
        const response = axios.get(`groups/list/${code}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const registerCurses = async(form: GroupM) => {
    try {
        const response =await axios.post("groups/create", form)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const newMember = async (form: MenberM) => {
    try{
        const response = await axios.post("groups/newMember", form)
        return response.data
    }catch (e){
        console.log(e)
    }
}