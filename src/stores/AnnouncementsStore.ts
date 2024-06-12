import {defineStore, storeToRefs} from "pinia";
import {type Ref, ref} from "vue";
import {createAnnouncements, findAllAnnouncements} from "@/services/AnnouncementsService";
import {useGroupStore} from "@/stores/GroupStore";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/stores/AuthStore";
import type {AnnouncementsM} from "@/models/announcements";

export const useAnnouncementsStore = defineStore("announcements", () => {
    /*const groupsStore = useGroupStore()
    const {groups} = storeToRefs(groupsStore)*/
    const router = useRouter()

    const announcements: Ref<AnnouncementsM[]> = ref([])

    const getAllAnnouncements = async () => {
        const id = parseInt(router.currentRoute.value.params.idGroup as string)
        announcements.value = await findAllAnnouncements(id)
    }

    const registerAnnouncements = async (form: AnnouncementsM) => {
        await createAnnouncements(form)
        router.push({name:'announcements'})
    }

    return {
        announcements,
        getAllAnnouncements,
        registerAnnouncements
    }
})