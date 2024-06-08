import {ref} from "vue";
import {useRouter} from "vue-router";
import {defineStore} from "pinia";
import {UserI, type UserM} from "@/models/user";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const authUser = ref({...UserI})
    const isAuth = ref(false)
    const token = ref(null)

    const login = async (form: UserM) => {
        isAuth.value = true
        await router.push({name: 'groups'})
    }

    const logout = async () => {
        await router.push({name: 'login'})
    }

    return {
        token,
        authUser,
        isAuth,
        login,
        logout
    }
}, {
    persist: true
})
