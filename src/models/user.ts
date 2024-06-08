import type {Validation} from "@/vendor/useForm/model";

export type UserM = {
    id: string
    password: string
}

export const UserI: UserM = {
    id: "", password: ""
}


export type UserLoginValidationsType = {
    id: Validation,
    password: Validation
}

export const UserLoginValidations: UserLoginValidationsType = {
    id: {
        attr: 'código',
        rules: 'required|min:3'
    },
    password: {
        attr: 'contraseña',
        rules: 'required|password'
    }
}