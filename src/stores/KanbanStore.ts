import {defineStore} from "pinia";
import {type Ref, ref} from "vue";
import type {KanbanM} from "@/models/kanban";
import {findKanbanByGroupId, findKanbans, findScoreStudents} from "@/services/KanbanService";

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
            return await findKanbanByGroupId(id)
        }catch (e){
            console.log(e)
        }
    }

    const getScores = async (id: number) => {
        try{
            return await findScoreStudents(id)
        }catch (e){
            console.log(e)
        }
    }

    return {
        kanbans,
        getAllKanbans,
        getKanBanById,
        getScores
    }
})