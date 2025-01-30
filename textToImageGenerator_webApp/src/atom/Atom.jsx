import axios from "axios";
import { useEffect } from "react";
import { atom, atomFamily, constSelector, selector, useRecoilValue } from "recoil";


// -------- LOGGED-IN USER ----------
export const  userAtom = atom({
    key: 'userAtom',
    default:0
})

// ------- CREDIT -------
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

//  ------ BACKEND TO FRONTEND ---------
export const backendUrlAtom = atom({
    key: 'backendUrlAtom',
    default: import.meta.env.VITE_BACKEND_URL
})

export const tokenAtom = atom({
    key: 'tokenAtom',
    default: localStorage.getItem('token')
})

// -------------------- FETCH CREDIT API -------------------------
export const loadCreditAtom = atomFamily({
    key:'loadCreditAtom',
    get:({get})=>{
        const backendURL= get(backendUrlAtom);
        const token = get(tokenAtom);
        console.log({backendURL,token})
        return {backendURL,token}
    }
})

export const loadCreditSelector = selector({
    key: 'loadCreditSelector',
    get: ({get})=>{
        const backendURL = get(backendUrlAtom);
        const token = get(tokenAtom);
        return {backendURL, token}
    }
})