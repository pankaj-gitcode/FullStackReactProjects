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
        <p className='bg-red-500'>Loading...</p>

        {/* ---------- INPUT, BUTTON ------- */}
      <div>
        <input type="text" placeholder='Describe what you want to generate' />
        <button>Generate</button>
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
