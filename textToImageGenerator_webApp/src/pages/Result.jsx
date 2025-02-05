import React, { useState } from 'react'
import { assets } from '../assets/assets'

export default function Result() {
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('') // store user's prompt

  const submitHandler = async(e)=>{
    console.log('Hello')
  }

  console.log("INPUT=> ", prompt)
  return (<>
    <form onSubmit={submitHandler} className='flex flex-col items-center gap-2 py-10'>

        {/* --------- IMAGE, LINE, LOADING ---------- */}
      <div className='relative'>
        <img src={assets.scrollImages[0]} alt={assets.scrollImages[0]} 
          className='max-w-sm rounded'
        />
        <span className={`absolute h-1 bg-blue-500 left-0 bottom-0 ${isImgLoading?'': `min-w-full transition-all ease-in-out`}`}/>
      </div>
        <p className={isLoading?`text-[6vw] sm:text-[2vw] md:text-[3.8vw] lg:text-[1.5vw]`: `hidden`}>Loading...</p>

        {/* ---------- INPUT, BUTTON ------- */}
      {
        !isImgLoading && 
        <div className='bg-neutral-500 flex flex-col sm:flex-row rounded-full mt-3'>
        
        <input type="text" onChange={(e)=>setPrompt(e.target.value)} value={prompt}
        placeholder='Describe what you want to generate'
          className='flex-1 bg-transparent w-96 max-sm:w-30 pl-6 pr-16 py-3 md:py-2 text-lg sm:text-sm outline-none text-[#e0e0e0]' />
        
        <button className='bg-zinc-900 rounded-full text-xl sm:text-sm px-2 sm:px-5 active:scale-105 ease-in-out duration-300 text-white'>Generate</button>
      </div>
      }

      {/* --------- DOWNLOAD -------- */}
      {
        isImgLoading &&
        <div className='flex items-center justify-center gap-3 mt-5'>
        <p className='border-2 border-gray-500 rounded-full
         text-black text-center px-2 lg:px-8 py-2 cursor-pointer
          active:scale-105 ease-in-out duration-300'
          onClick={()=>setIsImgLoading(false)}>Generate Another</p>

        <a href="" download className='flex-1 bg-zinc-900 rounded-full
         text-white text-center px-3 md:px-9 py-2 coursor-pointer active:scale-105 ease-in-out duration-300'>Download</a>
      </div>
      }

    </form>

    

    </>
  )
}
