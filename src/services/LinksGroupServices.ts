import axios from "axios";
import type {GroupLinkM} from "@/models/groupLink";

export const findLinksGroups = async (id: string) => {
    try {
        const response = await axios.get(`links/list/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const createLinkGroups = async (form: GroupLinkM) => {
    try {
        const response = await axios.post(`links/newLinkGroupUtp`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}