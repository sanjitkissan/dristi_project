import { teamheroimg1 } from '@/assets/team'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { teamArrType } from '@/types';
type prop={
  item:teamArrType
}
export default function TeamHerocard({item}:prop) {
  return (
    <section style={{backgroundImage:`url(${item.img.src})`}}  className=' w-full h-[35rem] bg-cover bg-center bg-no-repeat group relative'>
        <div className='group-hover:bg-black group-hover:bg-opacity-80 top-0 bottom-0 left-0 right-0 absolute transition-all duration-500 ease-in-out'>
            <span className='w-52 h-28 bg-red-600 -left-4 bottom-10 absolute flex flex-col items-start justify-center gap-3 p-2'> 
            <h1 className='text-white text-xl font-bold'>{item.title}</h1>
            <h1 className='text-white'>{item.position}</h1>
            </span>
            <span className='flex flex-col items-center justify-center gap-4 absolute right-6 bottom-10 group-hover:opacity-100 opacity-0 group-hover:-translate-y-7 transition-all duration-500 ease-in-out'>
              <FacebookIcon className='!text-red-500 rounded-full cursor-pointer'/>
              <TwitterIcon className='!text-red-500 rounded-full cursor-pointer'/>
              <PinterestIcon className='!text-red-500 rounded-full cursor-pointer'/>

            </span>
            
        </div>

    </section>
  )
}
