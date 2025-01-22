import { ReviewType } from "@/utils/types"
import Review from './Review'

type Props = {
  reviews: ReviewType[]
}
const ReviewsGrid = ({reviews}: Props) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map(review => {
        return (
           <Review key={review.id} {...review}/>
        );
      })}
    </div>
  )
}

export default ReviewsGrid