import {defineStore} from "pinia";
import {ref} from "vue";
import {GroupI, type GroupM} from "@/models/group";
import {registerCurses} from "@/services/GroupService";
import {GroupImgI, type GroupIngM} from "@/models/groupIng";
import {registerImgGroup} from "@/services/ImgGroupService";

export const useGroupStore = defineStore("ImgGroup",()=>{

    const ImgGroup = ref([{...GroupImgI}])

    const getAllGroups = ()=>{

    }

    const createGroup = async (form: GroupIngM)=>{
        await registerImgGroup(form)
    }

    return {
        ImgGroup,
        getAllGroups,
        createGroup

    }


})