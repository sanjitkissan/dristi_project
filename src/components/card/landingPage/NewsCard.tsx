import { newsArrType } from '@/types'
import React from 'react'
type prop={
    item:newsArrType
}
export default function NewsCard({item}:prop) {
  return (
    <section className='w-full flex flex-col items-start justify-start !h-96 gap-4 ' key={item.id}>
      <div className='w-full h-60 relative'>
        <img src={item.img.src} alt="" className='w-full h-full' />
        <span className='absolute left-0 bottom-0 h-10 w-28 center bg-white'>
            <p className='text-red-600 font-bold capitalize'>{item.tag}</p>
        </span>
      </div>
      <h1 className='text-xl font-semibold capitalize'>{item.title}</h1>
      <p className='text-sm text-gray-400'>{item.description}</p>
    </section>
  )
}
