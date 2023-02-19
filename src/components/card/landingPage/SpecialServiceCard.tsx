import { serviceArrType } from '@/types'
import React from 'react'
type prop ={
    item: serviceArrType
}
export default function SpecialServiceCard({item}:prop) {
  return (
    <section className={`w-full h-80 rounded-md flex flex-col items-start justify-center gap-4 p-6 ${item.id==5 && "mt-32"} ${item.id==2 && "mt-32"} shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      <img src={item.img.src} alt="" className='w-20 h-20 ' />
      <h1 className='text-xl font-bold capitalize'>{item.title}</h1>
      <p className='text-gray-600 font-semibold'>{item.description}</p>
    </section>
  )
}
