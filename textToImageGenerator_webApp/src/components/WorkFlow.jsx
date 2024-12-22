import React, { useRef } from 'react'
import { assets, stepsData } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';

export default function WorkFlow() {
    const workFlowRef = useRef();

    // useGSAP(()=>{
    //     const workFlow = workFlowRef.current;
    //     gsap.registerPlugin(ScrollTrigger);

    //     // ---- 1st worfFlow -------
    //     gsap.fromTo(workFlow.childNodes[0],{
    //         x: -20,
    //         opacity:0,
    //     },{
    //         x:0,
    //         opacity:1, yoyoEase:true, duration:3, scrub:1.2,
            
    //     })
    //     // ---- 2nd worfFlow -------
    //     gsap.fromTo(workFlow.childNodes[1],{
    //         x:20,opacity:0, 
    //     },{
    //         x:0,opacity:1, yoyoEase:true,duration:3,scrub:1.2
    //     } )
    //     // ---- 3rd worfFlow -------
    //     gsap.fromTo(workFlow.childNodes[2], {
    //         x:-20,opacity:0,
    //     },{
    //         x:0,opacity:1,yoyoEase:true, duration:3,
    //     })

        
    // })

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const workFlow = workFlowRef.current;
        workFlow.childNodes.forEach((elem,i)=>{
            const direction = i%2 === 0? 20: -20; //filtered x direction as per odd & even
            gsap.fromTo(elem,{
                x: direction,opacity:0
            },{
                x:0,opacity:1,scrollTrigger:{
                    trigger:elem, markers:true,
                    start:'top 80%', end:'bottom 20%',
                    duration:2, scrub:1.2,
                }
            })
        })
    })

  return (
    <div className='flex flex-col items-center justify-center mb-96'>
                {/* --------- TITLE ---------- */}
        <div className='flex flex-col items-center justify-center pb-10'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl'>How it works</h1>
            <p className='text-xs sm:text-sm text-gray-500'>Transform Words Into Stunning Images</p>
        </div>

        <div ref={workFlowRef} className='workFlow flex flex-col justify-center gap-5'>
            {
                stepsData.map((elem,i)=>
                <div key={i} className='bg-white flex sm:flex-row gap-2 sm:pl-2 sm:pr-20 
                 w-[50vw] sm:w-[76vw] lg:w-[50vw] py-8 shadow-lg rounded-lg border-[#E1E1E1] border-[1px]
                 flex-col items-center justify-center 
                 '>
                        {/* --------- IMAGE ------- */}
                    <img src={elem.icon} alt={elem.icon} className='ml-2 sm:pl-0 '/>
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
