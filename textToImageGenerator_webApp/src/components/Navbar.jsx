import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
  const logoToHomeNav = useNavigate();
  const navToBuy = useNavigate();
  const [user, setUser] = useState('Raj');
  const [credit, setCredit] = useState(4);
  const [name, setName] = useState('Raj');
   
  return (
    <div>
      <nav className='flex items-center justify-between p-5'>
            {/* --------- LOGO ---------- */}
        <img src={assets.logo}
         alt="text to image"
          onClick={()=>logoToHomeNav('/')}
            className='cursor-pointer w-28 sm:w-32 lg:w-40'
          />
          {
            user? 
              // ---------- USER LOGED-IN --------
            <div>
              <div>
                <img src={assets.star_icon} alt="credit left" />
                <p>Credit left: <span>{credit}</span></p>
              </div>
              <div>
                <h1>Hi!{name}</h1>
                <img src={assets.profile_icon} alt="profile" />
              </div>
            </div>  
            :
              // --------- USER LOGED-OUT --------
            <div className='flex items-center gap-10 text-[#545454] font-[400]'>

                {/* ------- PRICING ------- */}
                <p className='cursor-pointer' onClick={()=>navToBuy('/buy')}>Pricing</p>
                    {/* -------- LOGIN -------- */}
                <button className='bg-zinc-800 px-7 sm:px-10 py-2 text-white rounded-full text-small'>Login</button>
            </div> 
          }
      </nav>
    </div>
  )
}
