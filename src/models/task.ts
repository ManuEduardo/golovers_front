export type TaskM = {
    id: number
    columnKanbanId: number
    kanbanId: number
    name:string
    description: string
    assignedUserId: number
    date: Date
    priority: number
    lastUpdated: Date
    finishUserId: number
    limitTime: Date
}

export const TaskI: TaskM = {
    assignedUserId: 0,
    columnKanbanId: 0,
    lastUpdate: undefined,
    description: "",
    finishUserId: 0,
    code: 0,
    kanbanId: 0,
    lastUpdated: undefined,
    limitTime: undefined,
    name: "",
    priority: 0
}