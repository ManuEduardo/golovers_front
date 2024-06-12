import {ref, type Ref} from "vue";
import type {ColumnM} from "@/models/columns";

export default () => {
    const columns: Ref<ColumnM[]> = ref([])

    return {
        columns
    }
}