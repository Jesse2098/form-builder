'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { BiLeftArrow } from "react-icons/bi"


function Error({error}:{error: Error}) {
    useEffect(() => {
        console.error(error)
    },[error])

  return (
    <div className="flex mt-8 w-full h-full flex-col items-center justify-center">
        <h2 className="text-destructive text-2xl font-semibold ">Something went Horribly Wrong!</h2>
        <Button asChild variant={'link'} className='mt-2 gap-4 text-md hover:font-bold'>
            <Link href={`/dashboard`}>
                <BiLeftArrow/> Go Back to the Dashboard 
            </Link>
        </Button>
    </div>
    ) 
    {/*an ai app that helps you see the positive of any situation, picture and gives inspiring quotes via text or voice*/}
}

export default Error