

import Breadcrumb from '@/components/workPlacePartrner/Breadcrumb'
import Heroscetion from '@/components/workPlacePartrner/Heroscetion'
import Impact from '@/components/workPlacePartrner/Impact'
import Partners from '@/components/workPlacePartrner/Partners'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function WorkplacePartners() {
  return (
    <MainLayout>
      <Breadcrumb/>
      <Heroscetion/>
      <Partners/>
      <Impact/>
    </MainLayout>
  )
}
