
export type AnnouncementsM = {
    id: number,
    studentId: number,
    groupId: number,
    affair: number,
    message: string,
    dateTime: string
}

export const AnnouncementsI: AnnouncementsM = {
    affair: 0,
    dateTime: "", groupId: 0, id: 0, message: "", studentId: 0
}

