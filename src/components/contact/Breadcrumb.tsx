import { contactBreadcrumbImg } from '@/assets/contact'
import React from 'react'
import AllBreadcrumb from '../dynamicComponent/AllBreadcrumb'

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
      <AllBreadcrumb arr={arr}/>
    </section>
  )
}
