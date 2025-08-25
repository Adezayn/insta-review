import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

type RateType = {
  averageRating: number
};
 export const Rate:React.FC<RateType>= ({averageRating}) => {
 const fullRating = 5
 const color = averageRating >= 3 && averageRating < 4  ? '#FF8742' : averageRating >= 4 ? '#FF643D' : '#faa893'

  return (
    <div className='flex'>{Array.from({ length: fullRating }, (_, index) => {
        const ratingValue = index + 1; // because the index starts from 0 so the first will be rating of 1

        if (ratingValue <= Math.floor(averageRating)) {
          return <FaStar key={index} color={color} />;
        } 
        else if (
          ratingValue - 0.5 <= averageRating &&
          ratingValue > averageRating
        ) {
          return <FaStarHalfAlt key={index} color={color} />;
        } else {
          return <FaStar key={index} color="#D0D0D0" />;
        }
      })}</div>
  )
}

type PropType = {
  rating: number, 
  averageRating: number
};
const RatingInfo:React.FC<PropType> = ({rating, averageRating}) => {
  return (
    <div className='flex items-center gap-2'>
        <Rate averageRating={averageRating}/>
        <p>{averageRating}</p>
        <p>({rating} votes)</p>
    </div>
  )
}

export default RatingInfo