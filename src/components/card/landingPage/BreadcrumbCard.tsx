import { breadcrumbArrType } from '@/types'
import React from 'react'
type prop = {
    item:breadcrumbArrType
}
export default function BreadcrumbCard({item}:prop) {
  return (
    <section className='w-full flex flex-col items-start justify-center gap-2 bg-white py-4 px-8'>
      <div className='w-full h-64'>
        <img src={item.img.src} alt="" className='w-full h-full' />
      </div>
      <p className='text-red-400 font-semibold'>{item.price}</p>
      <h1 className='text-xl font-bold '>{item.title}</h1>
      <p className='text-gray-600 text-sm font-bold'>{item.description}</p>
    </section>
  )
}
