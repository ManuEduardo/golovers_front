
export type AnnouncementsM = {
    id: number,
    studentId: number,
    groupId: number,
    affair: string,
    message: string,
    dateTime: string
}

export const AnnouncementsI: AnnouncementsM = {
    affair: "",
    dateTime: "", groupId: 0, code: 0, message: "", studentId: 0
}

