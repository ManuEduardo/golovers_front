import type {GroupIngM} from "@/models/groupIng";
import axios from "axios";

export const findImgGroup = async() => {
    try {
        const response = await axios.get(`imggroup/list`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const createImgGroup =  async (form: GroupIngM) => {
    try {
        const response = await axios.post("imggroup/register", form)
        return response.data
    } catch (e) {

    }
}
