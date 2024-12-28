import React from 'react'
import { assets } from '../assets/assets'

export default function Result() {
  return (<>
    <form className='flex flex-col items-center gap-2'>
        {/* --------- IMAGE, LINE, LOADING ---------- */}
      <div className='relative'>
        <img src={assets.scrollImages[0]} alt={assets.scrollImages[0]} 
          className='max-w-sm rounded'
        />
        <span className='absolute h-1 min-w-full bg-blue-500 left-0 bottom-0'/>
      </div>
        <p className='text-[6vw] sm:text-[2vw] md:text-[3.8vw] lg:text-[1.5vw]'>Loading...</p>

        {/* ---------- INPUT, BUTTON ------- */}
      <div className='bg-neutral-500 flex flex-col sm:flex-row text-white rounded-full'>
        <input type="text" placeholder='Describe what you want to generate'
        className='flex-1 bg-transparent w-96 max-sm:w-30 pl-6 pr-16 py-1 text-lg outline-none' />
        <button className='bg-zinc-900 rounded-full text-xl sm:text-sm px-5'>Generate</button>
      </div>

      {/* --------- DOWNLOAD -------- */}
      <div>
        <p>Generate Another</p>
        <a href="" download>Download</a>
      </div>

    </form>

    

    </>
  )
}
