import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef , useEffect} from 'react'

// export default function DelBox() {
//   const divRef = useRef();
//   const div = divRef.current;
//   console.log('res: ', div)
//   useGSAP(()=>{
//     gsap.timeline({repeat:-10, yoyoEase:true, ease:'linear'})
//     .to(div, {x:320,backgroundPosition: "100% 0"})
//     .to(div, {y:320,backgroundPosition:"100% 100%"})
//     .to(div, {x:-120,backgroundPosition: "0 100%"})
//     .to(div, {y:120,backgroundPosition: "0 0"})
    
//     .to(div, {x:320,backgroundPosition: "100% 0"})
//     .to(div, {y:320,backgroundPosition:"100% 100%"})
//     .to(div, {x:-120,backgroundPosition: "0 100%"})
//     .to(div, {y:120,backgroundPosition: "0 0"})
//   }, [])
//   return (
//     <div>
//       <div
//         ref = {divRef}
//         className='h-[3vh] w-[30vw] border-2 border-solid border-black'
//         style={{
//           background: "linear-gradient(to right, red, blue, yellow)",
//           backgroundSize: "20% 20%"          
//         }}
//       ></div>
//     </div>
//   )
// }



export default function DelBox(){
  return(<>
    <div
      className='boxDiv'
    >Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
  </>)
}

