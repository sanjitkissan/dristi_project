import { aboutcompanypic1, aboutcompanypic2 } from '@/assets/LandingPage/aboutCompany'
import React from 'react'

export default function AboutCompany() {
  return (
    <section className='w-full main-container flex flex-col lg:flex-row items-center justify-between gap-6 mb-24 mt-[26rem]  '>
        <div className='w-full flex flex-col items-start justify-between gap-4'>
            <p className=' w-full text-start  text-red-500 font-bold '>ABOUT COMPANY </p>
            <h1 className='w-full text-start text-3xl font-bold capitalize'>get beautiful billboard ads for your business</h1>
            <p className=' text-gray-600 font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci distinctio aperiam voluptatem quae sunt. Iste fugiat inventore quibusdam? Repudiandae nostrum odio nesciunt. Vitae inventore cum cupiditate fugiat omnis animi molestias?</p>   
            <div className='w-full h-96 relative '>
                <img src={aboutcompanypic1.src} className=" w-full h-full  " alt="" />
                <span className='w-52 h-32 bg-red-600 absolute bottom-20 -left-4 flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl text-white font-bold'>25+</h1>
                    <p className=' text-lg text-white font-semibold capitalize'>year experience </p>
                     </span>
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-between gap-6'>
            <div className='w-full h-96 '>
                 <img src={aboutcompanypic2.src} className="w-full h-full" alt="" />
            </div>

            <div className='w-full flex gap-6 items-center justify-between '>
                <span className='w-full flex flex-col items-start justify-center gap-4  capitalize'>
                <h1 className='w-full text-black font-bold '>certified Team  </h1>
                <p className='w-full text-gray-500 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam non soluta minus sapiente ea.</p>
                </span>
                <span className='w-full flex flex-col items-start justify-center gap-4 capitalize '>
                <h1 className='w-full text-black font-bold'>trusted company</h1>
                <p className='w-full text-gray-500 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa atque accusamus consequuntur sapiente, dolores nisi!</p>
                </span>
            </div>
        </div>
    </section>
  )
}
