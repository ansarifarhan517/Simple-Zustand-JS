export const createRightCardSlice =(set) => ({
    taskInCompletioner: (taskid) => {
        console.log( set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskid ? { ...task, completed: false } : task
            )
        })))
        return set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskid ? { ...task, completed: false } : task
            )
        }))
    },
})