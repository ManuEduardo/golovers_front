import axios from "axios";
import type {UserRegister} from "@/models/userRegister";
import type {loginM} from "@/models/login";

export const getUsers = ()=> {
    try{
        const response = axios.get(`student/list`)
        return response.data
    }catch (error){
        console.log(error)
    }
}

export const registerUsers =  async (form: UserRegister)=>{
    try{
        const response = await axios.post("authenticate/register", form)
        return response.data
    }catch (error){
        console.log(error)
    }

}

export const UseLogin = async (form:loginM) =>{
    try{
        const response = await  axios.post("authenticate/login",form)
        return response.data
    }catch (e){
        console.log(e)
    }
}