import { wpimg } from '@/assets/workplacePartners/breadCrumb'
import React from 'react'
import MainBreadcrumb from '../commonComponent/MainBreadCrumb'

const arr={
    id:1,
    title:"Workplace partners",
    img:wpimg,
    sidefirstH1:"workplace",
    sidesecH1:"partners"
}

export default function Breadcrumb() {
  return (
    <section className='w-full h-full'>

        <MainBreadcrumb arr={arr} />
    </section>
  )
}
