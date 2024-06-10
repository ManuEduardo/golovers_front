import {ref} from "vue";
import {useRouter} from "vue-router";
import {defineStore} from "pinia";
import {UserI, type UserM} from "@/models/user";
import {authLogin} from "@/services/UserService";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const authUser = ref({...UserI})
    const isAuth = ref(false)
    const token = ref("")

    const login = async (form: UserM) => {
        try {
            const data = await authLogin(form)
            token.value = data.token.jwTtoken
            authUser.value = data.student
            if (token.value) {
                isAuth.value = true
                await router.push({name: 'groups'})
            }
        } catch (e) {
            console.log(e)
        }
    }

    const logout = async () => {
        isAuth.value = false
        token.value = ""
        authUser.value = {...UserI}
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
