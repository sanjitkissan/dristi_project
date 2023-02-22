import Breadcrumb from '@/components/team/Breadcrumb'
import Herosection from '@/components/team/Herosection'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function team() {
  return (
    <MainLayout>
        <Breadcrumb/>
       <Herosection/>
    </MainLayout>
  )
}
