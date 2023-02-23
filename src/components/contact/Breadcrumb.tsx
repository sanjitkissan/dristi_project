import { contactBreadcrumbImg } from '@/assets/contact'
import React from 'react'
import MainBreadcrumb from '../commonComponent/MainBreadCrumb'
const arr = {
    id:1,
    title:"contact",
    img:contactBreadcrumbImg,
    sidefirstH1:"our",
    sidesecH1:"contact"
}
export default function Breadcrumb() {
  return (
    <section className='w-full '>
      <MainBreadcrumb arr={arr}/>
    </section>
  )
}
