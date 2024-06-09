import {defineStore} from "pinia";
import {getListCurses, registerCurses} from '@/services/GroupService'
import {ref} from "vue";
import {GroupI,type GroupM} from "@/models/group";
export const useGroupStore = defineStore("groups",()=>{

    const groups = ref([{...GroupI}])

    const getAllGroups = ()=>{

    }

    const createGroup = async (form: GroupM)=>{
        await registerCurses(form)
    }

    return {
        groups,

        getAllGroups,
        createGroup
    }
})