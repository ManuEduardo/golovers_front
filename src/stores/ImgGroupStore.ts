import {defineStore} from "pinia";
import {ref} from "vue";
import {GroupImgI, type GroupIngM} from "@/models/groupIng";
import {createImgGroup} from "@/services/ImgGroupService";

export const useGroupStore = defineStore("ImgGroup", () => {

    const ImgGroup = ref([{...GroupImgI}])

    const getAllGroups = () => {

    }

    const createGroup = async (form: GroupIngM) => {
        await createImgGroup(form)
    }

    return {
        ImgGroup,
        getAllGroups,
        createGroup

    }


})