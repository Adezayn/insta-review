import { Review } from "@/utils/types"

type Props = {
  reviews: Review[]
}
const ReviewsGrid = ({reviews}: Props) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map(review => <p key={review.id}>{review.description}</p>)}
    </div>
  )
}

export default ReviewsGrid