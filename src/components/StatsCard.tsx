import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"
import { ReactNode } from "react"

interface StatCardProps {
    title: string,
    icon:ReactNode,
    helperText: string,
    value: string,
    loading: boolean,
    className: string,
  }

  export default function StatsCard(props : StatCardProps) {
    const {
      className,
      helperText,
      icon,
      loading,
      title,
      value
    } = props;
  
    return(
      <Card className={className}>
        <CardHeader className="flex flex-row items-center jsutify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground ">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {
                loading && (<Skeleton className="w-1/2 bg-slate-200 rounded-md"><span className="opacity-0">0</span></Skeleton>) 
            }
            {
                !loading && value
            }
          </div>
          <p className="text-xs text-muted-foreground pt-1"></p>
        </CardContent>
      </Card>
    )
  }