import { ReactNode } from "react"
import IconContainer from "../global/IconContainer"
import { IconType } from "react-icons"

type PropsType = {
  title: string, 
  metrics: string, 
  icon: IconType,
  hasBorder?: boolean; 
}
const MetricsCard:React.FC<PropsType> = ({title, metrics, icon, hasBorder = false}) => {
  return (
    <div className={`flex justify-between p-4 w-1/3 ${hasBorder ? "border-r" : ""}`}>
        <div>
            <p className="text-sm text-gray-500 mb-4">{title}</p>
            <p className="text-lg text-black font-semibold">{metrics}</p>
        </div>
       <div>
         <IconContainer icon={icon} size={15} color="#4f46e5"/>
       </div>
    </div>
  )
}

export default MetricsCard