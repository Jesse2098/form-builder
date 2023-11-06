import ThemeSwitcher from '@/components/ThemeSwitcher'
import {UserButton} from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import {Inter} from "next/font/google"

const inter = Inter({subsets: ['latin']})

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
        <nav>
            <ThemeSwitcher/>
            <UserButton afterSignOutUrl='/sign-in'/>
        </nav>
        <main>
            {children}
        </main> 
    </div>
  )
}
