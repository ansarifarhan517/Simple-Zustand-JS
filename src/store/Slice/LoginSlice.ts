import { StateCreator } from "zustand";

export type LoginState_Actions ={
    loggedIn: boolean
    loginChanger: () => void
}

export const createLoginSlice:StateCreator<LoginState_Actions> = (set) => ({
    loggedIn: true,
    loginChanger: () => set((state) => ({ loggedIn: !state.loggedIn }) )
})