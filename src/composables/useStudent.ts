import {useStudentStore} from "@/stores/StudentStore";
import {storeToRefs} from "pinia";
import {onMounted, type Ref, ref} from "vue";
import type {UserM} from "@/models/user";

export default () => {
    const store = useStudentStore();

    const email = ref('')

    const {students} = storeToRefs(store)
    const {getAllStudents, findStudentByEmail} = store

    const studentsList: Ref<UserM[]> = ref([])
    const addStudent = () => {
        const student = findStudentByEmail(email.value)
        console.log(email.value)
        if (student) {
            studentsList.value.push(student)
        }
    }

    const deleteStudent = (id: number) => {
        const idx = studentsList.value.findIndex(item => item.id === id);
        if (idx !== -1) {
            studentsList.value.splice(idx, 1);
        }
    };


    onMounted(async () => {
        await getAllStudents()
    })

    return {
        email,
        students,
        studentsList,
        addStudent,
        deleteStudent
    }

}