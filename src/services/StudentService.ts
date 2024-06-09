import axios from "axios";

export const findStudents = async () => {
    try {
        const response = await axios.get(`student/list`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}