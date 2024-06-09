import axios from "axios";
import type {GroupLinkM} from "@/models/groupLink";

export const getLinksGroups = () => {
    try {

        const response = axios.get(`links/list/3`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const registerLinkGroups = (form: GroupLinkM) => {
    try {
        const response = axios.post(`links/newLinkGroupUtp`)
        return response.data
    }catch (error){
        console.log(error)
    }
}