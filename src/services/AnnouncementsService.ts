import axios from "axios";

export const findAllAnnouncements = async (id: number) => {
    try {
        const response = await axios.get(`notice/list/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const createAnnouncements = async (form) => {
    try {
        const response = await axios.post(`notice/create`, form)
        return response.data
    } catch (e) {
        console.log(e)
    }
}