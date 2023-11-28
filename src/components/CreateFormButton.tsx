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
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
 } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from './ui/use-toast'
import { formSchema, formSchemaType } from '../../schemas/formSchema'
import { CreateForm } from '@/actions/form'
import { useRouter } from 'next/navigation'

 

function CreateFormButton() {

    const router = useRouter()

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: formSchemaType) {
        try {
            const formId = await CreateForm(values)
            toast({
                title: 'Success',
                description: 'You successfully created a form!',
                variant: "default"
            })
            console.log(formId)
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again later.',
                variant: "destructive"
            })
        }
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button 
                variant={'outline'}
                className='group border border-black items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 h-full hover:bg-slate-800 rounded mb-4 hover:text-white'>
                <BsFileEarmarkPlus className=" h-8 w-8 text-muted-foreground group-hover:text-primary"/>
                <p className='font-bold text-xl text-muted-foreground group-hover:text-primary'>Create new form</p>
            </Button>
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
                    <FormField control={form.control} name='name' render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} className='rounded'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name='description' render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea rows={5} {...field} className='rounded'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                </form>
            </Form>
            <DialogFooter>
                <Button 
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={form.formState.isSubmitting} className='w-full mt-4 rounded bg-blue-500 text-white hover:bg-black'>
                    {!form.formState.isSubmitting && <span>Save</span>}
                    {form.formState.isSubmitting && <ImSpinner2 className='animate-spin'/>}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default CreateFormButton