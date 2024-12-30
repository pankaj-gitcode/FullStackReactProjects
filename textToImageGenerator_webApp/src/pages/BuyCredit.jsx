import React from 'react'
import { plans } from '../assets/assets'

export default function BuyCredit() {
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='flex flex-col items-center gap-3'>
        <p className='uppercase border-2 rounded-full bg-white text-center text-sm px-6 py-2  '>Our Plans</p>
        <h1 className='text-xl sm:text-2xl md:text-3xl mb-5'>Choose the plan</h1>
        {/* ------------- CARDS ---------- */}
        <div className=''>
          {
            plans.map((elem,i)=>
            <div key={i}>
              <h1>{elem.id}</h1>
              <p>{elem.desc}</p>
              <span>${elem.price}/{elem.credits}</span>

              <button>Get Started</button>
            </div>
            )
          }
        </div>
      </div>
    </div>
    
  )
}
