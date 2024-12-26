import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap/all'
import { useGSAP } from '@gsap/react'

export default function Footer() {
    const logoRef = useRef();
    useGSAP(()=>{
        gsap.fromTo('.starGrp',{
            x:-30, ease:'bounce.inOut',
        },{x:logoRef.current.getBoundingClientRect().width-20,
            y:20 ,repeat:-1, yoyoEase:true, duration:5, rotate:360,})
    })
  return (
    <div className='py-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3'>

          <div className='flex items-center justify-between gap-6'>
           <div ref={logoRef} className='relative'>
            <img src={assets.logo} alt={assets.logo_icon} width={150} className='drop-shadow-[3px_1px_1px_rgba(0,0,0,0.5)]' />
            <img src={assets.star_group} alt={assets.star_group} width='32' className='
              starGrp absolute top-0 left-0 drop-shadow-[3px_3px_1px_rgba(0,0,0,0.8)] mix-blend-difference'/>
           </div>
            <hr className='h-6 border border-gray-300'/>
            <p className='text-xs sm:text-sm'>All right reserved. Copyright &copy;imagify  </p>
          </div>

            <div className='flex items-center justify-center gap-1'>
                <img src={assets.facebook_icon} alt={assets.facebook_icon} width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
                <img src={assets.twitter_icon} alt={assets.twitter_icon} width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
                <img src={assets.instagram_icon} alt={assets.instagram_icon} width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
            </div>
        </div>
    </div>
  )
}
