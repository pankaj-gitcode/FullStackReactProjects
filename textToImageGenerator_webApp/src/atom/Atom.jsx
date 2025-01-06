import { atom } from "recoil";


export const  userAtom = atom({
    key: 'userAtom',
    default:null
})

export const loginAtom = atom({
    key: 'loginAtom',
    default: 'Login'
})