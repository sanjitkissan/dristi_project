

import MainLayout from '@/layouts/MainLayout'
import Breadcrumb from '@/components/landingPage/Breadcrumb'
import OurBestServices from '@/components/landingPage/OurBestServices'
import ClientReview from '@/components/landingPage/ClientReview'
import OurNews from '@/components/landingPage/OurNews'
import AboutCompany from '@/components/landingPage/AboutCompany'
import Hooters from '@/components/landingPage/Hooters'
import Appointment from '@/components/landingPage/Appointment'



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
