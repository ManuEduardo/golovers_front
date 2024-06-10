import type {Validation} from "@/vendor/useForm/model";

export type AnnouncementsM = {
    id: number,
    studentId: number,
    groupId: number,
    message: string,
    dateTime: string
}

export const AnnouncementsI: AnnouncementsM = {
    dateTime: "", groupId: 0, id: 0, message: "", studentId: 0
}

