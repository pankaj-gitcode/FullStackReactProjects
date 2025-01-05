import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { loginAtom } from '../atom/Atom'
import { assets } from '../assets/assets';

export default function Login() {
    const [sign, setSign] = useRecoilState(loginAtom);

  return (
    <div className='absolute left-0 top-0 bottom-[86%] right-0 
    backdrop-blur-sm bg-black/30 flex items-center justify-center z-10'>

    <form className='relative flex items-center justify-start' >
        <div>
            <h1>{sign}</h1>
            <p>Welcome! Please {sign} to continue</p>

            <div className=''>
                <img src={assets.profile_icon} alt="profile_icon" />
                <input type="text" placeholder='Full name' required/>                
            </div>
            <div>
                <img src={assets.email_icon} alt="email_icon" />
                <input type="email" placeholder='Email id' required/>
            </div>
            <div>
                <img src={assets.lock_icon} alt="lock_icon" />
                <input type="password" placeholder='Password' required/>
            </div>
        </div>
    </form>

    </div>
  )
}
