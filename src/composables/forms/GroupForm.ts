import useForm from "@/vendor/useForm/useForm";
import {GroupFormValidations, GroupI} from "@/models/group";

export const useGroupForm = () => useForm({...GroupI}, GroupFormValidations)