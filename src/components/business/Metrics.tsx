import MetricsCard from "./MetricsCard";
// import { IoIosClock } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Card } from "../ui/card";


const Metrics = () => {
    const metricsContent = [
        {
            title: "Average Rating",
            metrics: "",
            icon: FaStar
        },
        {
            title: "Total Reviews",
            metrics: "",
            icon: HiMiniChatBubbleLeftEllipsis
        },
        {
        title: "Positive Feedback",
        metrics: "",
        icon: FaChartLine
        }
    ]
  return (
    <Card className="my-5">
    <div className="flex justify-between">
         {metricsContent.map((metrics, index) => (
          <MetricsCard
            key={index}
            {...metrics}
            hasBorder={index !== metricsContent.length - 1} // Only the last one has no border
          />
        ))}
    </div>
    </Card>
  )
}

export default Metrics