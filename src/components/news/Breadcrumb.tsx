import { newsBreadImg } from '@/assets/news'
import React from 'react'
import MainBreadcrumb from '../commonComponent/MainBreadCrumb'
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
    <MainBreadcrumb arr={arr}/>
  </section>
  )
}
