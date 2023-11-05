import { StateCreator } from "zustand";
import { get } from "../../api";

export type LoginState_Actions = {
    loggedIn: boolean
    loginChanger: (arg: boolean) => void
    getUsers: () => void
    users: User[],

}
type User = {
    "id": string,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

const getUsers = async () => {
    try {
        const response = await get<User[]>('getUsers')
        return response?.data
    } catch (error) {
        console.log(error)
    }

}

export const createLoginSlice: StateCreator<LoginState_Actions> = (set) => ({
    users: [],
    getUsers: async () => {
        const userData = await getUsers();
        set({ users: userData });
    },
    loggedIn: false,
    loginChanger: (shouldLogin: boolean) => {
        set(() => ({ loggedIn: shouldLogin }))
    }
})