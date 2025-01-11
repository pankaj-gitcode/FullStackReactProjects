import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

export default function DelBox() {
  const divRef = useRef();
  const div = divRef.current;
  console.log('res: ', div)
  useGSAP(()=>{
    gsap.timeline({repeat:-1, yoyoEase:true, ease:'linear'})
    .to(div, {y:520,backgroundPosition: "100% 0"})
    .to(div, {backgroundPosition:"100% 100%"})
    .to(div, {backgroundPosition: "0 100%"})
    .to(div, {backgroundPosition: "0 0"})
  }, [])
  return (
    <div>
      <div
        ref = {divRef}
        className='h-[3vh] w-[30vw] border-2 border-solid border-black'
        style={{
          background: "linear-gradient(to right, red, blue, yellow)",
          backgroundSize: "20% 20%"          
        }}
      ></div>
    </div>
  )
}
