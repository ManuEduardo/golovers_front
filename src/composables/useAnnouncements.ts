import {useAnnouncementsStore} from "@/stores/Announcements";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {AnnouncementsI} from "@/models/announcements";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

export default () => {
    const store = useAnnouncementsStore()
    const authStore = useAuthStore()
    const {announcements} = storeToRefs(store)
    const {getAllAnnouncements, registerAnnouncements} = store
    const announcement = ref({...AnnouncementsI})

    const router = useRouter()
    const id = parseInt(router.currentRoute.value.params.idGroup)

    const submitCreate = async () => {
        announcement.value.studentId = authStore.authUser.id
        announcement.value.groupId = id
        await registerAnnouncements(announcement.value)
    }

    onMounted(async () => {
        await getAllAnnouncements()
    })

    return {
        form: announcement,
        announcements,
        submitCreate
    }
}