import type {Validation} from "@/vendor/useForm/model";

export type GroupM = {
    studentId: number,
    name: string,
    className: string,
    description: string,
    hasClass: boolean,
    students: number,
    img: string,
}

export const GroupI: GroupM = {
    className: "", description: "", hasClass: false, img: "", name: "", studentId: 0, students: 0
}
export type GroupFormValidationsType = {
    studentId: Validation,
    name: Validation,
    className: Validation,
    description: Validation,
    hasClass: Validation,
    students: Validation,
    img: Validation,
}

export const GroupFormValidations: GroupFormValidationsType = {
    className: {
        attr: 'nombre de curso',
        rules: 'required',
    },
    description: {
        attr: 'descripcion',
        rules: 'required',
    },
    hasClass: {
        attr: 'pretenece a un curso',
        rules: 'required',
    },
    img: {
        attr: 'imagen',
        rules: 'required',
    },
    name: {
        attr: 'nombre de grupo',
        rules: 'required',
    },
    studentId: {
        attr: 'estudiante',
        rules: 'required',
    },
    students: {
        attr: 'estudiantes',
        rules: 'required',
    }

}