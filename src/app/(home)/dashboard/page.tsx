import CardStatsWrapper from '@/components/CardStatsWrapper'
import StatsCards from '@/components/StatsCards'
import React, { Suspense } from 'react'

export default function  page() {
  return (
    <div  className='container pt-4'>
      <Suspense fallback={<StatsCards loading={true}/> }>
        <CardStatsWrapper/>
      </Suspense>
    </div>
  )
}

