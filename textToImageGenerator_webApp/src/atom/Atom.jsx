import { atom } from "recoil";


export const  userAtom = atom({
    key: 'userAtom',
    default:0
})
export const creditAtom = atom({
    key: 'creditAtom',
    default: 0
})
    // -------- LOGIN --------
export const loginAtom = atom({
    key: 'loginAtom',
    default: 'Login'
})
    // --------- CLOSE SIGN-IN/UP card --------
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