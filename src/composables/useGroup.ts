import {useGroupStore} from "@/stores/GroupStore";
import {storeToRefs} from "pinia";
import {useGroupForm} from "@/composables/forms/GroupForm";
import {onMounted, ref} from "vue";

export default () => {
    const store = useGroupStore()
    const {groups} = storeToRefs(store)
    const {getAllGroups, registerGroup} = store
    const {form, errors, noErrors, validate} = useGroupForm()

    const show = ref(false)

    const submitCreate = async () => {
        /*validate()
        if (!noErrors.value) return*/
        await registerGroup(form.value).then((response)=>{
            if (response === undefined) return
            show.value = true
        })
    }

    onMounted(async () => {
        await getAllGroups()
    })

    return {
        form,
        show,
        errors,
        groups,
        submitCreate,

    }

}