import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import MainLayout from '@/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <MainLayout>
    <div className='w-full h-[80vh]'></div>
   </MainLayout>
    </>
  )
}
