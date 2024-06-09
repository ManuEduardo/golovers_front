import axios from "axios";
import type {GroupLinkM} from "@/models/groupLink";

export const getLinksGroups = (id:string) => {
    try {
        const response = axios.get(`links/list/${id}`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const registerLinkGroups = async (form: GroupLinkM) => {
    try {
        const response = await axios.post(`links/newLinkGroupUtp`)
        return response.data
    }catch (error){
        console.log(error)
    }
}