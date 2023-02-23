
import { newsPageArr } from '@/utils/news'
import React from 'react'
import NewsCard from '../card/landingPage/NewsCard'

export default function HeroSection() {
  return (
    <section className='w-full main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 !gap-y-6'>
      {
        newsPageArr.map((item)=>(
          <div key={item.id}>

            <NewsCard item={item}/>
          </div>
        ))
      }
    </section>
  )
}
