import { serviceArrType } from '@/types'
import React from 'react'
type prop ={
    item: serviceArrType
}
export default function SpecialServiceCard({item}:prop) {
  return (
    <section className={`w-full h-80 rounded-md flex flex-col items-start justify-center gap-4 p-6 ${item.id==5 && "mt-32"} ${item.id==2 && "mt-32"} shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-red-800 group !transition-all !duration-500 !ease-in-out`}>
      <img src={item.img.src} alt="" className='w-20 h-20 !transition-all !duration-500 !ease-in-out group-hover:-translate-y-2' />
      <h1 className='text-xl font-bold capitalize group-hover:text-white !transition-all !duration-500 !ease-in-out group-hover:-translate-y-2'>{item.title}</h1>
      <p className='text-gray-600 font-semibold group-hover:text-white !transition-all !duration-500 !ease-in-out group-hover:-translate-y-2'>{item.description}</p>
      <h1 className='text-lg tracking-widest text-white font-light opacity-0 group-hover:opacity-100 !transition-all !duration-500 !ease-in-out'>learn more</h1>
    </section>
  )
}
