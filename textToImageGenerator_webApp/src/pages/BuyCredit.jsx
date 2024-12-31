import React from 'react'
import { plans } from '../assets/assets'

export default function BuyCredit() {
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='flex flex-col items-center gap-3'>
        <p className='uppercase border-2 rounded-full bg-white text-center text-sm px-6 py-2  '>Our Plans</p>
        <h1 className='text-[12vw] sm:text-5xl md:text-3xl mb-5'>Choose the plan</h1>
        {/* ------------- CARDS ---------- */}
        <div className='flex lg:flex-row flex-col items-center justify-center gap-6'>
          {
            plans.map((elem,i)=>
            <div key={i} 
            className='flex flex-col items-center  bg-white
            border-[#ededed] border-2 h-[60vh] w-[90vw] sm:w-[50vw] lg:w-[25vw] rounded-xl  text-center'>
              
              <h1 className='pt-[10vh] text-3xl font-semibold'>{elem.id}</h1>
              <p className='text-xl sm:text-sm text-[#515151] py-3'>{elem.desc}</p>
              <p className='pt-5 pb-3 text-[12vw] sm:text-2xl md:text-3xl font-semibold'>${elem.price}/
                  <span className='text-sm text-[#515151]'>{elem.credits} credits</span>
              </p>

              <button className='bg-black text-white rounded-lg 
              md:px-12 py-3 px-6 text-lg md:text-[1vw] mt-10'>Get Started</button>
            </div>
            )
          }
        </div>
      </div>
    </div>
    
  )
}
