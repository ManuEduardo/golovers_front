import type {GroupIngM} from "@/models/groupIng";
import axios from "axios";
import type {GroupM} from "@/models/group";

export const getImgGroup = () => {
    try {
        const response = axios.get(`imggroup/list`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const registerImgGroup =  async (form: GroupIngM) => {
    try {
        const response = await axios.post("imggroup/register", form)
        return response.data
    } catch (e) {

    }
}
