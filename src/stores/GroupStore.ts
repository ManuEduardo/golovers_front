import {defineStore} from "pinia";
import {findAllGroups, createGroup, newMember, findMembers} from '@/services/GroupService'
import {type Ref, ref} from "vue";
import {GroupI, type GroupM} from "@/models/group";
import {useAuthStore} from "@/stores/AuthStore";
import {useStudentStore} from "@/stores/StudentStore";
import {useRouter} from "vue-router";
import type {MenberM} from "@/models/member";
import type {UserM} from "@/models/user";

export const useGroupStore =
    defineStore("groups", () => {
        const router = useRouter()
        const authStore = useAuthStore()
        const studentStore = useStudentStore()

        const groups: Ref<GroupM[]> = ref([])
        const members: Ref<UserM[]> = ref([])

        const getAllGroups = async () => {
            groups.value = await findAllGroups(authStore.authUser.id)
        }

        const getAllMembers = async (id:number)=>{
            members.value = await findMembers(id)
        }

        const registerGroup = async (form: GroupM) => {
            form.studentId = authStore.authUser.id
            form.img = 'imagen'
            form.students = studentStore.countStudents()
            return createGroup(form)
        }

        const registerMembers = async (form: MenberM) => {
            await newMember(form)
        }

        return {
            groups,
            members,
            getAllGroups,
            registerGroup,
            getAllMembers
        }
    })