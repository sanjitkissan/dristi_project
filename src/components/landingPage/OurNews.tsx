import { newsArr } from '@/utils/landinPage'
import React from 'react'
import NewsCard from '../card/landingPage/NewsCard'

export default function OurNews() {
  return (
    <section className='w-full main-container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 my-24'>
      <div className='lg:w-1/3 w-full flex flex-col h-96 items-start justify-between '> 
        <p className='text-lg text-red-600 uppercase'>news & blog</p>
        <h1 className='text-5xl font-bold capitalize'>our news</h1>
        <span className='w-full bg-gray-400 h-[.5px]'></span>
        <h1 className='text-lg font-bold capitalize'>creating a newsletter that brings your client</h1>
        <h1 className='text-lg font-bold capitalize'>main 4 steps to perfect digital marketing strategy</h1>
        <h1 className='text-lg font-bold capitalize'>top 8 principles of successful digital marketing </h1>
     </div>
      <div className='w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-between gap-4'>
        {
            newsArr.map((item)=>(
              <div key={item.id}>

                <NewsCard item={item} />
              </div>
            ))
        }
      </div>
    </section>
  )
}
