import { teamimg } from '@/assets/team'
import React from 'react'
import AllBreadcrumb from '../dynamicComponent/AllBreadcrumb'

const arr={
    id:1,
    title:"Team",
    img:teamimg,
    sidefirstH1:"Our",
    sidesecH1:"Team"
}
export default function Breadcrumb() {
  return (
   
   <section className='w-full '>
        <AllBreadcrumb arr={arr}/>
    </section>
  )
}
