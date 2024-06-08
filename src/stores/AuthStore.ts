import {ref} from "vue";
import {useRouter} from "vue-router";
import {defineStore} from "pinia";
import {UserI, type UserM} from "@/models/user";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const auth = ref({...UserI})
    const token = ref(null)

    const login = async (form: UserM) => {
        await router.push({name: 'home'})
    }

    const logout = async () => {
        await router.push({name: 'login'})
    }

    return {
        token,
        auth,
        login,
        logout
    }
}, {
    persist: true
})
