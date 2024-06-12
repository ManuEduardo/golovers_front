import type {KanbanM} from "@/models/kanban";
import type {TaskM} from "@/models/task";

export type ColumnM = {
    id: number
    typeColumnId: number
    color: string
    title: string
    orderColum: number
    kanban: KanbanM,
    tasks: TaskM[]
}

