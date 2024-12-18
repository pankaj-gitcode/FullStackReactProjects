import React from 'react'
import { assets } from '../assets/assets'

export default function Header() {
  return (
    <div className='my-10'>
        <div className='flex flex-col items-center justify-center'>
        
                {/* ------ TOP TXT ----- */}
            <div className='flex gap-2 bg-white border border-gray-500 rounded-full px-5 py-2 mb-10'>
                <h1 className='text-[4.5vw] sm:text-lg text-gray-500'>Best text to image generator</h1>
                <img src={assets.star_icon} alt={assets.star_icon} />
            </div>

                {/* ------- INTRO TXTS ------- */}
            <div className='flex flex-col items-center justify-center p-2'>
                <h1 className='font-[font6] text-3xl lg:text-6xl'>Turn text into</h1>
                <h1 className='font-[font6] text-3xl lg:text-6xl'><span className='text-blue-500'>image</span>, in seconds. </h1>
            
                <h1>Unleash your creativity with AI. Turn your imagination into visual art in</h1>
                <h1>seconds – just type, and watch the magic happen.</h1>
            </div>
                {/* ------- GENERATE BUTTON ------- */}
            <div>
                <button>Generate Images 
                    <img src={assets.star_group} alt="" />
                </button>
            </div>
        </div>

        <div>
            <div>
                <img src={assets.sample_img_1} alt="" />
                <img src={assets.sample_img_2} alt="" />
                <img src={assets.sample_img_1} alt="" />
                <img src={assets.sample_img_2} alt="" />
                <img src={assets.sample_img_1} alt="" />
                <img src={assets.sample_img_2} alt="" />
            </div>
            <h1>Generated images from imagify</h1>
        </div>

    </div>
  )
}
