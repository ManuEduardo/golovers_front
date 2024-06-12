import type {KanbanM} from "@/models/kanban";

export type ColumnM = {
    id:number
    typeColumn:number
    color:string
    title:string
    orderColum:number
    kanban:KanbanM
}

