import OurBestServices from '@/components/landingPage/OurBestServices'
import Breadcrumb from '@/components/servises/Breadcrumb'
import ChooseYourPlane from '@/components/servises/ChooseYourPlane'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function services() {
  return (
   <MainLayout title='dRSTi-Services'>
    <Breadcrumb/>
    <OurBestServices/>
    <ChooseYourPlane/>
   </MainLayout>
  )
}
