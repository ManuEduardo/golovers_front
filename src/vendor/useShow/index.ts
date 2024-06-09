import {ref} from "vue";

export default () => {
    const show = ref(false)

    const handleShow = () => {
        show.value = !show.value
    }

    const openShow = ()=>{
        show.value = true
    }

    const closeShow = ()=>{
        show.value = false
    }

    return {
        show,
        handleShow,
        openShow,
        closeShow
    }
}