import gsap from 'gsap/all';
import React, { useEffect, useRef } from 'react'

export default function DelBox() {

    const boxRef = useRef(null);

//   useEffect(() => {
//     const box = boxRef.current;

//     // Create a timeline for the gradient animation
//     gsap.timeline({ repeat: -1 })
//       .to(box, {
//         backgroundPosition: "100% 0", // Move gradient to top-right
//         duration: 2,
//         ease: "linear",
//       })
//       .to(box, {
//         backgroundPosition: "100% 100%", // Move gradient to bottom-right
//         duration: 2,
//         ease: "linear",
//       })
//       .to(box, {
//         backgroundPosition: "0 100%", // Move gradient to bottom-left
//         duration: 2,
//         ease: "linear",
//       })
//       .to(box, {
//         backgroundPosition: "0 0", // Move gradient to top-left
//         duration: 2,
//         ease: "linear",
//       });
//   }, []);


  return (
    <div>
        
        <div
      ref={boxRef}
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        background: "linear-gradient(to right, red, yellow, green, blue, red, black, brown)",
        backgroundSize: "80% 400%", // Make the gradient bigger than the element
      }}
    />


    </div>
  )
}
