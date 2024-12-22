import React from 'react'
import { assets, stepsData } from '../assets/assets'

export default function WorkFlow() {
  return (
    <div>
       <div className='flex items-center justify-center flex-col'>
            <div className="workTitle">
                <h1 className='text-center'>How it works</h1>
                <p>Transform Words Into Stunning Images</p>
            </div>

            {
                stepsData.map((elem,i)=>
                <div key={i} className='flex items-center justify-center gap-2'>
                    <img src={elem.icon} alt={elem.icon} />
                    <div>
                        <h1>{elem.title}</h1>
                        <p>{elem.description}</p>
                    </div>
                </div>
                )
            }
            
       </div> 
    </div>
  )
}
