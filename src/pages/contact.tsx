import Breadcrumb from '@/components/contact/Breadcrumb'
import HeroSection from '@/components/contact/HeroSection'
import MessageSection from '@/components/contact/MessageSection'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function contact() {
  return (
    <MainLayout>
        <Breadcrumb/>
        <HeroSection/>
        <MessageSection/>
    </MainLayout>
  )
}
