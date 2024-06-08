import {ref} from "vue";

export default () => {
    const show = ref(false)

    const handleShow = () => {
        show.value = !show.value
    }

    return {
        show,
        handleShow
    }
}