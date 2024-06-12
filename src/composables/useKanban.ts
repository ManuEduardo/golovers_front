import {useKanbanStore} from "@/stores/KanbanStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {KanbanI} from "@/models/kanban";

export default () => {
    const store = useKanbanStore()
    const {kanbans} = storeToRefs(store)
    const {getAllKanbans, getKanBanById, getScores} = store
    const router = useRouter()
    const id = parseInt(router.currentRoute.value.params.idGroup as string)

    const kanban = ref({...KanbanI})

    return {
        kanbans,
        kanban,
        getKanBanById,
        getScores
    }
}