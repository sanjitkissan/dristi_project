import { appointment } from '@/assets/LandingPage/aboutCompany'
import React from 'react'

export default function Appointment() {
  return (
<section style={{backgroundImage:`url(${appointment.src})`}} className='w-full h-[60vh] bg-center bg-no-repeat bg-cover relative my-24'>
<section className='absolute top-0 bottom-0 right-0 left-0  bg-black bg-opacity-80'>
    <div className=' main-container w-full h-full flex flex-col items-center justify-center gap-4'>
        <p className='text-xl text-red-600 uppercase '>request for free</p>
        <h1 className='lg:text-5xl tex-3xl text-white font-bold capitalize'>help your business to get on a new stage</h1>
        <p className='w-full lg:w-1/2 text-base text-white text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima recusandae sit amet non veniam dolore minus tempore cum placeat quo.</p>
        <button className='text-white text-xl py-4 px-8 border uppercase'>make appointment</button>
    </div>
    </section>
</section>  )
}
