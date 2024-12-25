import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

export default function Testimonials() {
  return (
    <div className='min-h-[100vh] pt-5'>
        {/* ---------- TITLE ---------- */}
        <div className='flex flex-col flex-wrap-reverse items-center justify-center py-3'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl'>Customer testimonials</h1>
            <p className='text-xs sm:text-lg text-gray-500'>What Our Users Are Saying</p>
        </div>
        {/* ---------- CARDS ---------- */}
        <div className='flex items-center justify-center gap-3 py-6'>
            {
                testimonialsData.map((elem,i)=>
                <div key={i} className='bg-[#fff] flex flex-wrap flex-col items-center justify-center py-16 px-8 rounded-xl
                gap-2 border-2 border-[#E1E1E1]'>
                    <img src={elem.image} alt={elem.image} className='w-[50vw] sm:w-[10vw] lg:w-[5vw]]' />
                    <h1 className='text-[8vw] sm:text-[3.8vw] md:text-[2.5vw] lg:text-[1.5vw]'>{elem.name}</h1>
                    <p className='text-2xl md:text-[1vw]'>{elem.role}</p>
                    <div className='flex items-center gap-1'>
                        {
                        Array(elem.stars).fill().map((ele,i)=>
                            <img key={i} src={assets.rating_star} alt={assets.rating_star} />
                        )  
                        }
                    </div>
                    <p className='text-center'>I&apos;ve been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier</p>
                </div>
                )
            }
        </div>
    </div>
  )
}
