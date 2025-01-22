import { ReviewType } from "@/utils/types"
import Image from "next/image";

const FeedReview = ({image, vendorImage, vendorName, name, createdAt, description, rating}: ReviewType) => {
  return (
    <div>
      <div className="flex">
        <Image src={image} alt={name} className="rounded" />
        <div>
          <p>{name} wrote a review</p>
          <p>{createdAt.toString()}</p>
        </div>
      </div>
      <div>
        <Image src={vendorImage} alt={name} />
      </div>
      <div>
        <p>{vendorName}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeedReview