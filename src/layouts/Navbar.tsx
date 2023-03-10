import { Main_Logo } from '@/assets/navbar'
import { navArr } from '@/utils/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter()
  return (
    <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] sticky top-0 z-50 bg-white hidden lg:flex'>
    <section className='main-container w-full flex items-center justify-between h-20 '>
        <picture className='w-[50%] flex items-center justify-start'>
        <Link href={"/"}>
      <img src={Main_Logo.src} alt="" className='w-auto h-16' />
      </Link>
        </picture>
        <div className='w-full h-full flex items-center justify-between'>
            {navArr.map((item)=>(
            <span className='h-full center p-2 cursor-pointer group' key={item.id} onClick={()=>router.push(`${item.path}`)}>
                <h1 className='text-center text-xl font-bold capitalize group-hover:text-red-600 transition-all duration-300 ease-in-out'>{item.title}</h1>
            </span>
            ))}
        </div>
        <div className='w-[50%] flex items-center justify-end gap-4'>
                <SearchIcon className='!text-center !text-2xl !font-bold cursor-pointer'/>
                <MenuIcon className='!text-center !text-2xl !font-bold cursor-pointer'/>
        </div>

    </section>
    </section>
  )
}
