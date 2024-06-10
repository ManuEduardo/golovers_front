import {defineStore} from "pinia";
import {type Ref, ref} from "vue";
import type {KanbanM} from "@/models/kanban";

export default defineStore("kanban", () => {
    const kanbans: Ref<KanbanM[]> = ref([])

    const getAllKanbans = () => {

    }

    return {
        kanbans
    }
})