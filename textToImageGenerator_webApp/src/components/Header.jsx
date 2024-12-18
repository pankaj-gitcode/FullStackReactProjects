import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap/all';

export default function Header() {
    const topTxtRef = useRef();
    const txtRef = useRef();

    useGSAP(()=>{
            // ------ TOP TXT ANIM -----
        gsap.fromTo(topTxtRef.current.children, {
            y:10,
            opacity:0,
        }, {
            y:0,
            stagger:0.2,
            opacity:1,
            yoyoEase:true,
            duration:0.5
        })
            // ------ INTRO TXTS ANIM -----
        gsap.fromTo(txtRef.current.children, {
            y:10,
            opacity: 0,
        },{
            y:0,
            stagger:1.2,
            opacity:1,
            duration:2,
            yoyoEase:true,
            ease:'back'
        })
        
    }) 
    
    

  return (
    <div className='my-10'>
        <div className='flex flex-col items-center justify-center'>
        
                {/* ------ TOP TXT ----- */}
            <div ref={topTxtRef} className='flex gap-2 bg-white border border-gray-500 rounded-full px-5 py-2 mb-10'>
                <h1 className='text-[4.5vw] sm:text-lg text-gray-500'>Best text to image generator</h1>
                <img src={assets.star_icon} alt={assets.star_icon} />
            </div>

                {/* ------- INTRO TXTS ------- */}
            <div ref={txtRef} className='flex flex-col items-center justify-center'>
                <h1 className='font-[font6] text-3xl lg:text-7xl font-semibold '>Turn text into</h1>
                <h1 className='font-[font6] text-2xl sm:text-3xl lg:text-7xl font-semibold '><span className='text-blue-500'>image</span>, in seconds. </h1>
            
                <h1 className='text-[2.8vw] sm:text-[2vw] lg:text-[1.1vw] pt-3 text-gray-600'>Unleash your creativity with AI. Turn your imagination into visual art in</h1>
                <h1 className='text-[2.8vw] sm:text-[2vw] lg:text-[1.1vw] pb-3 text-gray-600'>seconds – just type, and watch the magic happen.</h1>
            </div>
                {/* ------- GENERATE BUTTON ------- */}
            <div className='py-6'>
                <button className='bg-black text-white flex items-center justify-center 
                px-5 sm:px-10 py-3 rounded-full text-sm gap-2 cursor-pointer active:scale-105 duration-300'>Generate Images 
                    <img src={assets.star_group} alt={assets.star_group} className='w-8' />
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
