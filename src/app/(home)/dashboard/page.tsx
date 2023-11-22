import CardStatsWrapper from '@/components/CardStatsWrapper'
import CreateFormButton from '@/components/CreateFormButton'
import StatsCards from '@/components/StatsCards'
import { Separator } from '@/components/ui/separator'
import React, { Suspense } from 'react'

export default function  page() {
  return (
    <div  className='container pt-4'>
      <Suspense fallback={<StatsCards loading={true}/> }>
        <CardStatsWrapper/>
      </Suspense>
      <Separator className='my-6 border border-slate-300'/>
      <h2 className='text-4xl font-bold col-span-2'>Your Forms</h2>
      <Separator className='my-6 border border-slate-300'/>
      <CreateFormButton/>
    </div>
  )
}

