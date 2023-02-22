import { serviceBreadcrumbImg } from '@/assets/services'
import React from 'react'
import MainBreadcrumb from '../commonComponent/Breadcrumb'

const arr = {
    id:1,
    title:"services",
    img:serviceBreadcrumbImg,
    sidefirstH1:"our",
    sidesecH1:"services"
}

export default function Breadcrumb() {
  return (
    <section className=''>
      <MainBreadcrumb arr={arr} />
    </section>
  )
}
