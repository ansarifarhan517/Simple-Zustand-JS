import { StateCreator } from "zustand"
import { TaskState } from "./RightCardSlice"


export type TLeftCardState_Actions = {
    taskCompletioner: (taskid: number) => void
}
export const createLeftCardSlice: StateCreator<TLeftCardState_Actions & TaskState, [], [], TLeftCardState_Actions> = (set) => ({
    taskCompletioner: (taskid) => (set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === taskid ? { ...task, completed: true } : task
        )
    })))
})