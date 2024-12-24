import React from 'react'
import { assets } from '../assets/assets'

export default function Introduction() {
  return (
    <div className='min-h-[100vh] py-8'>
        <div className='flex flex-col items-center txt-shadow'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl'>Create AI Images</h1>
            <p className='text-sm sm:text-lg text-gray-500 pt-2'>Turn your imagination into visuals</p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-12 py-6 '>
            {/* --------- LHS ----------- */}
            <div className='basis-[50%] lg:basis-[30%]'>
                <img src={assets.scrollImages[Math.floor(Math.random()*assets.scrollImages.length)]} 
                    alt="img" 
                    className='h-[50vh] w-[80vw] sm:w-[200vw] md:w-[220vw] 
                    rounded-lg drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] hover:scale-105 cursor-pointer duration-300 ease-in-out '
                    />
            </div>
            {/* --------- RHS ----------- */}
            <div className='basis-[50%] text-justify'>
                <h1 className='text-2xl sm:text-3xl txt-shadow'>Introducing the AI-Powered Text to <br/> Image Generator</h1>
                <p className='text-[3.9vw] sm:text-[1.6vw] lg:text-[1.2vw] text-gray-500 pt-3 txt-shadow'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className='text-[3.9vw] sm:text-[1.6vw] lg:text-[1.2vw] text-gray-500 pt-3 txt-shadow'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

    </div>
  )
}
