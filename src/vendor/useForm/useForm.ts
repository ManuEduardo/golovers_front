import {computed, type Ref, ref, type UnwrapRef} from "vue";
import type {Rule, Validation} from "@/vendor/useForm/model";

const validationRequired = (value: string, attr: string) =>
    !value ? `El campo ${attr} es obligatorio` : null

const validationNullable = (value: string) => null

const validationPassword = (value: string, attr: string) =>
    value.length < 8 ? `El campo ${attr} debe tener al menos 8 caracteres` : null

const validationConfirmation = (value: string, confirmationValue: string, attr: string) =>
    value !== confirmationValue ? `El campo ${attr} no coincide` : null

const validationEmail = (value: string, attr: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `El campo ${attr} debe ser un correo electrónico válido` : null

const validationNumeric = (value: string, attr: string) =>
    !/^\d+$/.test(value) ? `El campo ${attr} debe ser numérico` : null

const validationMin = (value: string, min: string, attr: string) =>
    value.length < parseInt(min) ? `El campo ${attr} debe tener al menos ${min} caracteres` : null

const validationMax = (value: string, max: string, attr: string) =>
    value.length > parseInt(max) ? `El campo ${attr} debe tener máximo ${max} caracteres` : null

const validationDigits = (value: string, digits: string, attr: string) =>
    value.length !== parseInt(digits) ? `El campo ${attr} debe tener exactamente ${digits} dígitos` : null

const validationDecimal = (value: string, args: string[], attr: string) => {
    const [intPart, decPart] = args.map(arg => parseInt(arg));
    const regex = new RegExp(`^\\d{1,${intPart}}(\\.\\d{1,${decPart}})?$`);
    return !regex.test(value) ? `El campo ${attr} debe tener un máximo de ${intPart} dígitos enteros y ${decPart} decimales` : null
}

const validationFunctions = {
    required: validationRequired,
    nullable: validationNullable,
    password: validationPassword,
    confirmation: validationConfirmation,
    email: validationEmail,
    numeric: validationNumeric,
    min: validationMin,
    max: validationMax,
    digits: validationDigits,
    decimal: validationDecimal,
}


export default <M, V>(model: M, validations: V) => {
    const errors = ref({...model})
    const form = ref({...model})
    const noErrors = computed(() => Object.keys(errors.value).length === 0)

    const validate = () => {
        const auxErrors: Record<string, string | null> = {}
        if (validations) {
            for (const key in validations) {
                const config = validations[key] as Validation
                const attr = config.attr
                const rules = config.rules.split('|')
                for (const rule of rules) {
                    const auxRule = rule.split(':')
                    const keyRule = auxRule[0] as Rule
                    const validator = validationFunctions[keyRule]
                    if (validator) {
                        const value = form.value[key as string]
                        const length = auxRule.length
                        if (!auxErrors[key]) {
                            if (length === 1) {
                                auxErrors[key] = validator(value, config.attr)
                            } else {
                                const num = auxRule[1]
                                const extraArgs = auxRule.slice(1)
                                auxErrors[key] = validator(value, extraArgs, attr)
                            }
                            if (!auxErrors[key]) delete auxErrors[key]
                        }
                    }
                }
            }
            errors.value = {...auxErrors}
        }
    }

    return {
        form,
        errors,
        validate,
        noErrors
    }
}