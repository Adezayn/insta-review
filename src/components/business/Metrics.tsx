'use client'
import MetricsCard from "./MetricsCard";
// import { IoIosClock } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Card } from "../ui/card";
import { useAppSelector } from "@/redux/hooks";


const Metrics = () => {
    const {averageRating, totalRating, positiveFeedback} = useAppSelector(state => state.vendors);
    console.log(averageRating, "avg-rating-total", totalRating)
    const metricsContent = [
        {
            title: "Average Rating",
            metrics: averageRating,
            icon: FaStar
        },
        {
            title: "Total Reviews",
            metrics: totalRating,
            icon: HiMiniChatBubbleLeftEllipsis
        },
        {
        title: "Positive Feedback",
        metrics: positiveFeedback,
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