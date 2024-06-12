import axios from "axios";
import type {GroupM} from "@/models/group";
import type {MenberM} from "@/models/member";

export const findAllGroups = async (id: number) => {
    try {
        const response = await axios.get(`groups/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const createGroup = async (form: GroupM) => {
    try {
        const response = await axios.post("groups/create", form)
        return response.data
    } catch (e) {
        console.log(e)
    }
}


export const findGroupByCode = async (code: string) => {
    try {
        const response = await axios.get(`groups/list/${code}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const newMember = async (form: MenberM) => {
    try {
        const response = await axios.post("groups/newMember", form)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const findMembers = async (id: number) => {
    try {
        const response = await axios.get(`groups/students/${id}`)
        return response.data
    }catch (e) {
        console.log(e)
    }
}