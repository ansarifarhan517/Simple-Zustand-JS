export const createLoginSlice = (set) => ({
    loggedIn: true,
    loginChanger: () => set((state) => ({ loggedIn: !state.loggedIn }) )
})