import {useFormLogin} from "@/composables/forms/UserForm";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default () => {
    const {login, logout, ...store} = useAuthStore()
    const {authUser, token} = storeToRefs(store)
    const {formLogin, validate, errors, noErrors} = useFormLogin()

    const submitLoginForm = async () => {
        formLogin.value.email = formLogin.value.email + '@utp.edu.pe'
        validate()
        if (!noErrors.value) return
        await login(formLogin.value)
    };

    const handleLogout = async () => {
        await logout()
    };

    return {
        formLogin,
        errors,
        authUser,
        token,
        submitLoginForm,
        handleLogout,
    }
}