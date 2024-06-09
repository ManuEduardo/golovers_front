export type UserRegister = {
    "name": string,
    "lastName": string,
    "email": string,
    "password":string,
    "ciclo": number,
    "phone": number
}

export const UserRegisterI:UserRegister={
    ciclo: 0, email: "", lastName: "", name: "", password: "", phone: 0

}