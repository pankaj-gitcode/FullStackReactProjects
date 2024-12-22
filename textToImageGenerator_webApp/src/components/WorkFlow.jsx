import React from 'react'
import { assets, stepsData } from '../assets/assets'

export default function WorkFlow() {
  return (
    <div className='flex flex-col items-center justify-center'>
                {/* --------- TITLE ---------- */}
        <div className='flex flex-col items-center justify-center pb-10'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl'>How it works</h1>
            <p className='text-xs sm:text-sm text-gray-500'>Transform Words Into Stunning Images</p>
        </div>

        <div className='flex flex-col justify-center gap-5'>
            {
                stepsData.map((elem,i)=>
                <div key={i} className='bg-white flex sm:flex-row gap-2 sm:pl-3 sm:pr-20 
                 w-[50vw] sm:w-[76vw] lg:w-[50vw] py-5 shadow-lg rounded-lg border-[#E1E1E1] border-[1px]
                 flex-col items-center justify-center sm:items-center
                 '>
                        {/* --------- IMAGE ------- */}
                    <img src={elem.icon} alt={elem.icon} className='sm:pl-0 '/>
                            {/* ------- DESCRIPTION ----- */}
                    <div className='flex flex-col items-center sm:items-start '>
                        <h1 className='text-10 sm:text-xl'>{elem.title}</h1>
                        <p className='text-sm text-gray-500 text-center sm:text-start'><q>{elem.description}</q></p>
                    </div>
                </div>
                )
            }
        </div>

    </div>
  )
}
