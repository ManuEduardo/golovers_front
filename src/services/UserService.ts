import axios from "axios";
import type {UserRegister} from "@/models/userRegister";
import type {loginM} from "@/models/login";


export const createUser = async (form: UserRegister) => {
    try {
        const response = await axios.post("authenticate/register", form)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

export const authLogin = async (form: loginM) => {
    try {
        const response = await axios.post("login",
            {email: form.email, password: form.password})
        return response.data
    } catch (e) {
        console.log(e)
    }
}