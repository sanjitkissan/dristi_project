import { clientReviewArrType } from '@/types'
import React from 'react'
type prop={
    item:clientReviewArrType
}
export default function ClientReviewCard({item}:prop) {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-4 p-2' >
      <h1 className='text-4xl text-gray-400 font-extrabold capitalize'>{item.title}</h1>
      <h1 className='text-2xl font-bold '> { item.amount} <span className='text-red-600'>+</span></h1>
      <p className='text-gray-600 capitalize'>{item.description}</p>
    </section>
  )
}
