import React from 'react'
import { assets } from '../assets/assets'

export default function Introduction() {
  return (
    <div className='min-h-[100vh]'>
        <div>
            <h1>Create AI Images</h1>
            <p>Turn your imagination into visuals</p>
        </div>

        <div>
            {/* --------- LHS ----------- */}
            <div>
                <img src={assets.scrollImages[ 
                    Math.floor(Math.random()*assets.scrollImages.length)
                    ]} 
                    alt="img" />
            </div>
            {/* --------- RHS ----------- */}
            <div>
                <h1>Introducing the AI-Powered Text to Image Generator</h1>
                <p>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

    </div>
  )
}
