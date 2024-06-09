import type {UserM} from "@/models/user";

export const createAdapterUserResp = (user): UserM => (
    {
        id: user.id,
        password: user.password,
        ciclo: user.ciclo,
        email: user.email,
        lastName: user.lastName,
        name: user.name,
        phone: user.phone,
    }
)