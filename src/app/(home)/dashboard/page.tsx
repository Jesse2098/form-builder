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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormButton/>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div> 
  )
} {/* you ended on the form builder  video at 51:00 min*/}

