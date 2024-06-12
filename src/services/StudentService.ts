import axios from "axios";

export const findStudents = async () => {
    try {
        const response = await axios.get(`student/list`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const findStudentById = async (id: number) => {
    try {
        const response = await axios.get(`student/getById/${id}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}