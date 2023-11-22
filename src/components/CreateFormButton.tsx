"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import {BsFileEarmarkPlus} from 'react-icons/bs'
import {ImSpinner2} from 'react-icons/im'
import { Button } from './ui/button'

function CreateFormButton() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className='rounded text-white bg-blue-500 hover:bg-black'>Create new form</Button>
        </DialogTrigger>
        <DialogContent className='bg-white text-black w-2/3 rounded'>
            <DialogHeader>
                <DialogTitle>
                    Create Form 
                </DialogTitle>
                <DialogDescription>
                    Create a new form to start collecting responses!
                </DialogDescription>
            </DialogHeader>
            
        </DialogContent>
    </Dialog>
  )
}

export default CreateFormButton