import { newsBreadImg } from '@/assets/news'
import React from 'react'
import AllBreadcrumb from '../dynamicComponent/AllBreadcrumb'

const arr = {
    id:1,
    title:"news",
    img:newsBreadImg,
    sidefirstH1:"latest",
    sidesecH1:"news"
}
export default function Breadcrumb() {
  return (
    <section className='w-full '>
   <AllBreadcrumb arr={arr}/>
  </section>
  )
}
