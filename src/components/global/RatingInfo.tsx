import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

type RateType = {
  averageRating: number
};
 export const Rate:React.FC<RateType>= ({averageRating}) => {
 const fullRating = 5

  return (
    <div className='flex'>{Array.from({ length: fullRating }, (_, index) => {
        const ratingValue = index + 1;

        if (ratingValue <= Math.floor(averageRating)) {
          return <FaStar key={index} color="green" />;
        } else if (
          ratingValue - 0.5 <= averageRating &&
          ratingValue > averageRating
        ) {
          return <FaStarHalfAlt key={index} color="green" />;
        } else {
          return <FaStar key={index} color="gray" />;
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