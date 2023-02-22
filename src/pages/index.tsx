import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import MainLayout from '@/layouts/MainLayout'
import Breadcrumb from '@/components/landingPage/Breadcrumb'
import OurBestServices from '@/components/landingPage/OurBestServices'
import ClientReview from '@/components/landingPage/ClientReview'
import OurNews from '@/components/landingPage/OurNews'
import AboutCompany from '@/components/landingPage/AboutCompany'
import Hooters from '@/components/landingPage/Hooters'
import Appointment from '@/components/landingPage/Appointment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <MainLayout>
    <Breadcrumb/>
    <AboutCompany/>
    <Hooters/>
    <OurBestServices/>
    <ClientReview/>
    <Appointment/>
    <OurNews/>
   </MainLayout>
    </>
  )
}
