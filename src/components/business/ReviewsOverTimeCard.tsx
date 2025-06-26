"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { month: "January", positive: 100, negative: 86, neutral: 80 },
  { month: "February", positive: 30, negative: 6, neutral: 40 },
  { month: "March", positive: 10, negative: 100, neutral: 0 },
  { month: "April", positive: 8, negative: 70, neutral: 17 },
  { month: "May", positive: 2, negative: 0, neutral: 11 },
  { month: "June", positive: 50, negative: 0, neutral: 5 },
]

const chartConfig = {
  positive: {
    label: "Positive",
    color: "var(--chart-positive, #4f46e5)",
  },
  negative: {
    label: "Negative",
    color: "var(--chart-negative, #ec4899)",
  },
  neutral: {
    label: "Neutral",
    color: "var(--chart-neutral, #9ca3af)",
  },
} satisfies ChartConfig

const ReviewsOverTimeCard = () => {
  return (
    <Card className="md:w-1/2">
      <CardHeader>
        <CardTitle>Review Volume</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => `${value}`} // optional: add " reviews" etc.
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="positive"
              stackId="a"
              fill={chartConfig.positive.color}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="neutral"
              stackId="a"
              fill={chartConfig.neutral.color}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="negative"
              stackId="a"
              fill={chartConfig.negative.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium text-green-600">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none">
          See how your review activity has changed over time.
        </div>
      </CardFooter>
    </Card>
  )
};

export default ReviewsOverTimeCard;
