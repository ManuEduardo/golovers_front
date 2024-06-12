import axios from "axios";

export const findAllAnnouncements = async (id: number) => {
    try {
        const response = await axios.get(`notice/group/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const createAnnouncements = async (form) => {
    try {
        const response = await axios.post(`notice/create`, {
            studentId: form.studentId,
            groupId: form.groupId,
            message: form.message,
            affair: form.affair,
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}