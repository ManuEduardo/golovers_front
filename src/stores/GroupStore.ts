import {defineStore} from "pinia";
import {findAllGroups, createGroup} from '@/services/GroupService'
import {type Ref, ref} from "vue";
import {GroupI, type GroupM} from "@/models/group";
import {useAuthStore} from "@/stores/AuthStore";
import {useStudentStore} from "@/stores/StudentStore";

export const useGroupStore =
    defineStore("groups", () => {

        const authStore = useAuthStore()
        const studentStore = useStudentStore()

        const groups: Ref<GroupM[]> = ref([])

        const getAllGroups = async () => {
            groups.value = await findAllGroups()
        }

        const registerGroup = async (form: GroupM) => {
            form.studentId = authStore.authUser.id
            form.img = 'imagen'
            form.students = studentStore.countStudents()
            await createGroup(form)
        }

        return {
            groups,
            getAllGroups,
            registerGroup
        }
    })