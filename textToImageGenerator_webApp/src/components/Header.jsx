import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import {useGSAP} from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all';

export default function Header() {
    const topTxtRef = useRef();
    const txtRef = useRef();
    const imgContainerRef = useRef();
    const imgWrapperRef = useRef();

        // ------------------ ANIMATING TEXTS ---------------
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
    
    // --------------------- IMAGE ANIMATION -----------------
        gsap.registerPlugin(ScrollTrigger);
        // ------- CONTAINER & WRAPPER ANIMATION --------
        useGSAP(()=>{
            const imgContainer = imgContainerRef.current;
            const imgWrapper = imgWrapperRef.current;
            const totalContentWidth = imgWrapper.scrollWidth; // total_images_width + imgWrapperDiv_padding[L+R]
            const images = gsap.utils.toArray('.image');
            console.log(images, images.length)

            gsap.to(imgWrapper,{
                // x: -100 * (images.length-1),
                xPercent: (imgWrapper.offsetWidth - window.innerWidth),
                scrollTrigger:{
                    trigger:imgContainer,
                    start: 'top 20%',
                    // end: ()=>"+=" + imgWrapper.offsetWidth,
                    // end: ()=>`+=${totalContentWidth}`,
                    // end: "+=" + (imgWrapper.offsetWidth - window.innerWidth),
                    markers:true,
                    scrub:true,
                    pin:true,
                    anticipatePin:1
                }
            })
        })

        // ------- IMAGES ANIMATION --------
        

        
        
    

    
    
    // console.log(imgWrapperRef.current.children.length)

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

                {/* ---------- IMAGES ---------- */}
        <div ref={imgContainerRef} id="imgContainer" className="   overflow-hidden">
            <div ref={imgWrapperRef} id="imgWrapper" className='flex gap-2 '>
                {
                    assets.scrollImages.map((imgs,i)=>
                        <img key={i}
                         src={imgs} alt={imgs}
                         className='image w-[30vw] transition-transform duration-300'
                          />
                    )
                }
            </div>
        </div>

    </div>
  )
}
