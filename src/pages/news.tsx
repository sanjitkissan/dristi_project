import Breadcrumb from '@/components/news/Breadcrumb'
import HeroSection from '@/components/news/HeroSection'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function news() {
  return (
    <MainLayout>
        <Breadcrumb/>
        <HeroSection/>
    </MainLayout>
  )
}
