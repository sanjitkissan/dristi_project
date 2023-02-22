import { impactimg } from '@/assets/workplacePartners/client'
import React from 'react'

export default function Impact() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-7 my-24 h-[70vh]'>
         <h1 className='text-red-500 text-2xl font-bold '>Impact</h1>
          <div style={{backgroundImage:`url(${impactimg.src})`}} className="w-full h-[70vh] bg-cover bg-no-repeat bg-center"></div>
    </section>
  )
}
