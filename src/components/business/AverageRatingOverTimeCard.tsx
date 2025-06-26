"use client"

// import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "January", averageRating: 5 },
  { month: "February", averageRating: 4.5 },
  { month: "March", averageRating: 3 },
  { month: "April", averageRating: 5 },
  { month: "May", averageRating: 3.9 },
  { month: "June", averageRating: 2 },
]

const chartConfig = {
  averageRating: {
    label: "avgRating",
    color: "#4f46e5",
  }
} satisfies ChartConfig

const AverageRatingOverTimeCard = () => {
  return (
    <Card className="md:w-1/2">
      <CardHeader>
        <CardTitle>Average Rating - Dots</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="averageRating"
              type="natural"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{
                fill: "#4f46e5",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
};

export default AverageRatingOverTimeCard;
