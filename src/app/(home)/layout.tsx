
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import {Inter} from "next/font/google"

const inter = Inter({subsets: ['latin']})

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div className={cn("min-h-full font-sans antialiased mb-20 ", inter.className)}>
      <Navbar/>  
      <main>
        {children}
      </main> 
    </div>
  )
}
