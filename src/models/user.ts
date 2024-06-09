import type {Validation} from "@/vendor/useForm/model";

export type UserM = {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    ciclo: number,
    phone: string,
}

export const UserI: UserM = {
    ciclo: 0, email: "", lastName: "", name: "", phone: "",
    id: 0, password: ""
}


export type UserLoginValidationsType = {
    email: Validation,
    password: Validation
}

export const UserLoginValidations: UserLoginValidationsType = {
    email: {
        attr: 'código',
        rules: 'required'
    },
    password: {
        attr: 'contraseña',
        rules: 'required'
    }
}