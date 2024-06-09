import axios from "axios";
import type {GroupM} from "@/models/group";

export const getCourse = async (form:GroupM) => {
    try{
        const response = await axios.post("api/cursos/crear", form)
        return response.data
    }catch (e){
        console.log(e)
    }
}