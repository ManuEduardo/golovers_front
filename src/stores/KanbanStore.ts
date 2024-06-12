import {defineStore} from "pinia";
import {type Ref, ref} from "vue";
import type {KanbanM} from "@/models/kanban";
import {findKanbanByGroupId, findKanbans} from "@/services/KanbanService";

export const useKanbanStore = defineStore("kanban", () => {
    const kanbans: Ref<KanbanM[]> = ref([])

    const getAllKanbans = async () => {
        try{
            const response = await findKanbans()
            return response.data
        }catch (e){
            console.log(e)
        }
    }

    const getKanBanById = async (id: number) => {
        try{
            const response = await findKanbanByGroupId(id)
            return response
        }catch (e){
            console.log(e)
        }
    }

    return {
        kanbans,
        getAllKanbans,
        getKanBanById
    }
})