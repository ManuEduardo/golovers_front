import axios from "axios";
import type {UserRegister} from "@/models/userRegister";

export const getUsers = ()=> {
    try{
        const response = axios.get(`student/list`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const registerUsers = (form: UserRegister)=>{
    try{
        const response = axios.post("authenticate/register", form)
        return response.data
    }catch (error){
        console.log(error)
    }

}