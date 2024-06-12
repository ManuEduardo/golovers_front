import {useGroupStore} from "@/stores/GroupStore";
import {storeToRefs} from "pinia";
import {useGroupForm} from "@/composables/forms/GroupForm";
import {onMounted, ref} from "vue";
import type {MenberM} from "@/models/member";
import type {UserM} from "@/models/user";
import {newMember} from "@/services/GroupService";
import {useRouter} from "vue-router";

export default () => {
    const store = useGroupStore()
    const {groups, members} = storeToRefs(store)
    const {getAllGroups, registerGroup, getAllMembers} = store
    const {form, errors, noErrors, validate} = useGroupForm()

    const show = ref(false)

    const router = useRouter()

    const submitCreate = async (students: UserM[]) => {
        /*validate()
        if (!noErrors.value) return*/
        await registerGroup(form.value).then((response) => {
            if (response === undefined) return
            show.value = true
            if (students.length === 0) return
            for (let student of students) {
                const member: MenberM = {idStudent: student.id, code: response.code}
                submitNewMember(member)
            }
        })
    }

    const submitNewMember = async (member: MenberM) => {
        await newMember(member)
    }

    const findAllMembers = async () => {
        const id = parseInt(router.currentRoute.value.params.idGroup as string)
        await getAllMembers(id)
    }


    return {
        form,
        show,
        errors,
        groups,
        members,
        submitCreate,
        getAllGroups,
        findAllMembers
    }

}