export const createLeftCardSlice = (set) => ({
    taskCompletioner: (taskid) => {
        return set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskid ? { ...task, completed: true } : task
            )
        }))
    },
})