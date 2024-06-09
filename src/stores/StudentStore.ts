import {defineStore} from "pinia";
import {ref, type Ref} from "vue";
import type {UserM} from "@/models/user";
import {findStudents} from "@/services/StudentService";

export const useStudentStore =
    defineStore("student", () => {

        const students: Ref<UserM[]> = ref([])

        const getAllStudents = async () => {
            students.value = await findStudents()
        };

        const findStudentByEmail = (email: string) => {
            return students.value.find(item => {
                console.log(item.email, email)
                return item.email === email
            })
        }

        const countStudents = () => 0;

        return {
            students,
            getAllStudents,
            findStudentByEmail,
            countStudents
        }
    })