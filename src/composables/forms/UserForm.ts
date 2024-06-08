import useForm from "@/vendor/useForm/useForm";
import {UserI, UserLoginValidations} from "@/models/user";


export const useFormLogin = () => {
    const {form, errors, noErrors, validate} = useForm({...UserI}, UserLoginValidations)
    return {
        formLogin: form,
        errors,
        noErrors,
        validate
    }
}
