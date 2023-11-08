import { SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const Navbar = () => {
   
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/' className='flex z-40 font-semibold'>SaaS Kit.</Link>
                
                {/*todo: add mobile navbar*/}
                <div className="hidden items-center space-x-4 sm:flex sm:gap-3">
                    <>
                        <Link href='/pricing' className={buttonVariants({
                            variant: 'link',
                            size: 'sm',
                        })}>Pricing</Link>
                    </>

                    <Link href='/sign-in' className={buttonVariants({
                        size: 'sm',
                        variant: 'link'
                    })}>
                        <SignInButton/>
                    </Link>
                    
                    <Link href='/sign-up' className={buttonVariants({
                        size: 'lg',
                        variant: 'default',
                        className: 'bg-slate-950 text-white flex gap-1 hover:text-black hover:font-semibold'
                    })}>
                        Get Started <ArrowRightIcon/>
                    </Link>
                    <UserButton afterSignOutUrl='/'/>
                    {/*
                    <ThemeSwitcher/> */}
                </div>

            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar