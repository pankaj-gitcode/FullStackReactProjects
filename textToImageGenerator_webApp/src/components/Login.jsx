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
                        {/* ------- TITLE ------- */}
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-3xl lg:text-5xl'>{sign}</h1>
                    <p className='text-[3.9vw] sm:text-lg pb-5'>Welcome back! Please {sign} to continue </p>
                </div>

                    {/* ------- USER NAME ------- */}
                <div className='flex items-center gap-2 border-2 rounded-full px-0 sm:px-3 mb-3 text-gray-500 text-lg'>
                    <img src={assets.user_icon} alt="user_icon" className='w-3'/>
                    <input type="text" placeholder='Full Name' className='outline-none pr-1 sm:pr-10 py-3' required />
                </div>

                    {/* --------- EMAIL ---------- */}
                <div className='flex items-center gap-2 border-2 rounded-full px-3 text-gray-500 text-lg'>
                    <img src={assets.email_icon} alt="email_icon" />
                    <input type="email" placeholder='Email' className='outline-none pr-10 py-3' required />
                </div>
                    {/* ------------ PASS ----------- */}
                <div className='flex items-center gap-2 border-2 rounded-full px-3 my-3 text-gray-500 text-lg'>
                    <img src={assets.lock_icon} alt="lock_icon" />
                    <input type="password" placeholder='Password' className='outline-none pr-10 py-3' required/>
                </div>
                    {/* --------- PASS RESET -------- */}
                <div>
                    <p className='text-[#007AFF] text-lg lg:text-xl'>Forgot password?</p>
                </div>
                    {/* ---------- SIGN/UP BTN -------- */}
                <div className='bg-[#007AFF] rounded-full text-center py-3 
                text-lg active:scale-105 cursor-pointer duration-300 
                transition ease-in-out my-3'>
                    <button className='text-[#fff]'>{sign}</button>
                </div>
                    {/* ----------- SIGN/UP FLIP --------- */}
                <div className='text-slate-500 text-xl sm:text-lg'>
                    <p>Already have an account? <span className='text-[#007AFF] cursor-pointer'>{sign}</span> here</p>
                </div>
            </form>
        </div>
    </>
  )
}
