import { hooterImg } from '@/assets/LandingPage/aboutCompany'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
export default function Hooters() {
  return (
    <section className='w-full main-container'>
    <section className='main-container w-full flex  items-center justify-between gap-6 my-24'>
            <div className='w-1/5 h-full center '>
                <span className='w-full h-full items-start justify-end -rotate-90  '>
                    <p className='text-gray-400 font-normal text-3xl uppercase -ml-16'>special</p>
                    <p className='text-gray-400  font-bold text-7xl uppercase -ml-10 '>hooters</p>

                </span>

            </div>
            <div style={{backgroundImage:`url(${hooterImg.src})`}} className='w-4/5 h-[70vh] bg-center bg-no-repeat bg-cover relative'>
              <span className='absolute w-72 h-32 -top-10 -left-16 bg-white  py-6'>
                <p className='text-2xl font-medium capitalize -ml-2'>spring summer billboard advertising burger</p>
              </span>
              <span className='absolute w-80 h-40 -bottom-10 -right-16 bg-white flex flex-col items-start justify-center gap-2 p-2'>
                <h1 className='text-2xl font-medium  capitalize'>special billboard</h1>
                <p className='text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolores minus atque! Maiores accusantium facere magni!</p>
                <EastIcon className=' !text-red-600 !transition-all !duration-300 hover:translate-x-2 cursor-pointer'/>

              </span>
            </div>
    </section>

    </section>
  )
}
