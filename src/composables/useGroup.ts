import {useGroupStore} from "@/stores/GroupStore";
import {storeToRefs} from "pinia";
import {useGroupForm} from "@/composables/forms/GroupForm";
import {onMounted} from "vue";

export default () => {
    const store = useGroupStore()
    const {groups} = storeToRefs(store)
    const {getAllGroups, registerGroup} = store
    const {form, errors, noErrors, validate} = useGroupForm()

    const submitCreate = async () => {
        /*validate()
        if (!noErrors.value) return*/
        await registerGroup(form.value)
    }

    onMounted(async () => {
        await getAllGroups()
    })

    return {
        form,
        errors,
        groups,
        submitCreate,

    }

}