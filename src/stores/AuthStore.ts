import {ref} from "vue";
import {useRouter} from "vue-router";
import {defineStore} from "pinia";
import {UserI, type UserM} from "@/models/user";
import {authLogin} from "@/services/UserService";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const authUser = ref({...UserI})
    const isAuth = ref(false)
    const token = ref(null)

    const login = async (form: UserM) => {
        try {
<<<<<<< HEAD

            //authUser.value = await authLogin(form)
            isAuth.value = true
            await router.push({name: 'groups'})

=======
            //authUser.value = await authLogin(form)
            isAuth.value = true
            await router.push({name: 'groups'})
>>>>>>> 117cf7ce74a8ffe8afbabe5a078e84a7167b7c76
            authUser.value = await authLogin(form)
            if (authUser.value) {
                isAuth.value = true
                await router.push({name: 'groups'})
            }
<<<<<<< HEAD

=======
>>>>>>> 117cf7ce74a8ffe8afbabe5a078e84a7167b7c76
        } catch (e) {
            console.log(e)
        }
    }

    const logout = async () => {
        isAuth.value = false
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
