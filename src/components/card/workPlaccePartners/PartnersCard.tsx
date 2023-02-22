import { heroArrType } from '@/types'
import React from 'react'
type prop={
    item:heroArrType
}
export default function PartnersCard({item}:prop) {
  return (
    <section className=' ' >
<img src={item.img.src} alt="" className='w-52 h-20  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-md'/>
    </section>
  )
}
