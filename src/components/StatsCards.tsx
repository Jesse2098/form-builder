import GetFormStats from "@/actions/form"
import {LuView} from "react-icons/lu"
import {FaWpforms} from "react-icons/fa"
import {HiCursorClick} from "react-icons/hi"
import {TbArrowBounce} from "react-icons/tb"
import StatsCard  from "./StatsCard"



interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>,
  loading: boolean,
}

export default function StatsCards(props: StatsCardProps) {
  const {data,loading} = props

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600"/>}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600 bg-white"
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-blue-600"/>}
        helperText="All time form submissions"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-green-600 bg-white"
      />
      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-blue-600"/>}
        helperText="Visits that result into form submissions"
        value={data?.visits.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600 bg-white"
      />
      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-blue-600"/>}
        helperText="Visits that leave without interacting"
        value={data?.visits.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-red-600 bg-white"
      />
    </div>
  )
}

