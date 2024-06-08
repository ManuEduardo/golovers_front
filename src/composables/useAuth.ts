import {useFormLogin} from "@/composables/forms/UserForm";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default () => {
    const {login, logout, ...store} = useAuthStore()
    const {auth, token} = storeToRefs(store)
    const {formLogin, validate, errors, noErrors} = useFormLogin()

    const submitLoginForm = async () => {
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
        auth,
        token,
        submitLoginForm,
        handleLogout,
    }
}