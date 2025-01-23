import { atom } from "recoil";


export const  userAtom = atom({
    key: 'userAtom',
    default:0
})

export const loginAtom = atom({
    key: 'loginAtom',
    default: 'Login'
})

export const exitAtom = atom({
    key: 'exitAtom',
    default: 0
})

//  ------ BACKEND TO FRONTEBD ---------
export const backendUrlAtom = atom({
    key: 'backendUrlAtom',
    default: import.meta.env.VITE_BACKEND_URL
})

export const tokenAtom = atom({
    key: 'tokenAtom',
    default: localStorage.getItem('token')
})