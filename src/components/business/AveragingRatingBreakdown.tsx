"use client"
// import { Cell, Pie, PieChart, ResponsiveContainer, Sector, SectorProps } from 'recharts';
import { Cell, Pie, PieChart } from 'recharts';
import { FaStar } from "react-icons/fa6";
import { useAppSelector } from '@/redux/hooks';
import { Card } from '../ui/card';

// type Coordinate = {
//   x: number;
//   y: number;
// };

// type PieSectorData = {
//   percent?: number;
//   name?: string | number;
//   midAngle?: number;
//   middleRadius?: number;
//   tooltipPosition?: Coordinate;
//   value?: number;
//   paddingAngle?: number;
//   dataKey?: string;
//   payload?: any;
// };

// type PieSectorDataItem = React.SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// const renderActiveShape = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   startAngle,
//   endAngle,
//   fill,
//   payload,
//   percent,
//   value,
// }: PieSectorDataItem) => {
//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * (midAngle ?? 1));
//   const cos = Math.cos(-RADIAN * (midAngle ?? 1));
//   const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
//   const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
//   const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
//   const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={(outerRadius ?? 0) + 6}
//         outerRadius={(outerRadius ?? 0) + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

const RatingBar = ({number, value}:{number: number, value: number}) => {
  console.log(`bg-[${COLORS[number]}] `)
  return (
         <div className='flex items-center mb-1 gap-1'>
           <p>{number}</p>
             <FaStar
                size={10}
                className='text-gray-300'
            />
            {/* <div className={`bg-[${COLORS[number]}]`}/> */}
            <div className={`bg-amber-600  w-40 py-1 rounded-md `}/>
            <p>{value}</p>
         </div>
  )
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#000'];

const AveragingRatingBreakdown = () => {
 const {ratingsCount} = useAppSelector(state => state.vendors);
  return (
     <Card className="my-5 py-5 flex flex-col items-center xl:w-1/2">
          {/* // <ResponsiveContainer width="100%" height="100%">
    //   <PieChart width={4000} height={4000}>
    //     <Pie
    //       activeShape={renderActiveShape}
    //       data={data}
    //       cx="50%"
    //       cy="50%"
    //       innerRadius={60}
    //       outerRadius={80}
    //       fill="#8884d8"
    //       dataKey="value"
    //     />
    //   </PieChart>
    // </ResponsiveContainer> */}
    <p>Rating Breakdown</p>
       <div className='flex items-center flex-col md:flex-row'>
        <PieChart width={200} height={200}>
          <Pie
            // activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
         </PieChart>
         {/* ratings */}
         <div>
            {Object.entries(ratingsCount).map(([key, value]) => <RatingBar number={Number(key)} value={value} key={key}/>)}
         </div>
       </div>
     </Card>
  );
}

export default AveragingRatingBreakdown;