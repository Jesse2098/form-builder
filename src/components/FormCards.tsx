import { GetForms } from '@/actions/form'
import { Form } from '@prisma/client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { formatDistance } from 'date-fns'
import { LuView } from 'react-icons/lu'
import { FaWpforms } from 'react-icons/fa'
import { Button } from './ui/button'
import Link from 'next/link'
import {BiRightArrowAlt} from 'react-icons/bi'
import {FaEdit} from 'react-icons/fa'

async function FormCards() {
    const forms = await GetForms()
  return (
    <>
        {forms.map((form) => (
            <FormCard key={form.id} form={form}/>
        ))}
    </>
  )
}

export default FormCards

function FormCard({form} : {form:Form}) {
    return(
        <Card className='bg-slate-50'>
            <CardHeader>
                <CardTitle className='flex items-center gap-2 justify-between'>
                    <span className='truncate font-bold'>
                        {form.name}
                    </span>
                    {form.published && 
                        <Badge variant={'default'} className='rounded bg-green-500 text-white'>Published</Badge>
                    }
                    {!form.published && 
                        <Badge variant={'destructive'} className='rounded bg-red-500 text-white'>Draft</Badge>
                    }
                </CardTitle>
                <CardDescription className='flex items-center justify-between text-muted-foreground text-sm'>
                    {/*to add the kah "about 1 hour ago" date stuff check below*/}
                    {formatDistance(form.createdAt, new Date(),             {addSuffix:true}
                    )}
                    {
                        !form.published && <span className='flex items-center gap-2'>
                            <LuView className="text-muted-foreground"/>
                            <span>{form.visits.toLocaleString()}</span>
                            <FaWpforms className="text-muted-foreground"/>
                            <span>{form.submissions.toLocaleString()}</span>
                        </span>
                    }
                </CardDescription>
            </CardHeader>
            <CardContent className='h-[20px] truncate text-sm text-muted-foreground'>
                    {
                        form.description || <h4 className='font-semibold'>No Description</h4>
                    }
            </CardContent>
            <CardFooter>
                {
                    form.published && (
                        <Button asChild className='w-full mt-2 gap-4 text-md rounded bg-slate-700 text-white hover:text-slate-700 hover:border hover:border-solid hover:border-black hover:font-bold'>
                            <Link href={`/forms/${form.id}`}>
                                View Submissions <BiRightArrowAlt/>
                            </Link>
                        </Button>
                    )
                }
                {
                    !form.published && (
                        <Button asChild className='w-full mt-2 gap-4 text-md rounded bg-slate-700 text-white hover:text-slate-700 hover:border hover:border-solid hover:border-black hover:font-bold'>
                            <Link href={`/builder/${form.id}`}>
                                Edit Form <FaEdit/>
                            </Link>
                        </Button>
                    )
                }
            </CardFooter>
        </Card>
    )
}