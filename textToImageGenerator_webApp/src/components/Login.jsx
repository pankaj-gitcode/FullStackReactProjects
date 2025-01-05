import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { loginAtom } from '../atom/Atom'
import { assets } from '../assets/assets';

export default function Login() {
    const [sign, setSign] = useRecoilState(loginAtom);

  return (
    <>
        <div className='flex items-start justify-center absolute top-0 left-0 right-0 bottom-0
        z-10 backdrop-blur-sm bg-black/30'>
            <form className='relative mt-20 bg-white p-10 rounded-xl '>
                <div>
                    <h1>{sign}</h1>
                    <p>Welcome back! Please {sign} to continue </p>
                </div>
                    {/* ------- USER NAME ------- */}
                <div className='flex items-center '>
                    <img src={assets.user_icon} alt="user_icon" className='w-3'/>
                    <input type="text" placeholder='Full name' required />
                </div>
                    {/* --------- EMAIL ---------- */}
                <div className='flex items-center '>
                    <img src={assets.email_icon} alt="email_icon" />
                    <input type="email" placeholder='Email' required />
                </div>
                    {/* ------------ PASS ----------- */}
                <div className='flex items-center '>
                    <img src={assets.lock_icon} alt="lock_icon" />
                    <input type="password" placeholder='Password' required/>
                </div>
                    {/* --------- PASS RESET -------- */}
                <div>
                    <p>Forgot password?</p>
                </div>
                    {/* ---------- SIGN/UP BTN -------- */}
                <div>
                    <button>{sign}</button>
                </div>
                    {/* ----------- SIGN/UP FLIP --------- */}
                <div>
                    <p>Already have an account?<span>{sign} here</span></p>
                </div>
            </form>
        </div>
    </>
  )
}
