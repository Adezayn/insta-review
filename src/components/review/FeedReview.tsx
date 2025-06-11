"use client"

import { ReviewType } from "@/utils/types"
import Image from "next/image";

const FeedReview = ({image, vendorImage, vendorName, reviewerName, createdAt, description, rating}: ReviewType) => {
  return (
    <div>
      <div className="flex">
        {image && <Image src={image} alt={reviewerName} className="rounded" />}
        <div>
          <p>{reviewerName} wrote a review</p>
          <p>{createdAt?.toString() ?? createdAt}</p>
        </div>
      </div>
          {vendorImage && <Image src={vendorImage} alt={reviewerName} />}
      <div>
        <p>{vendorName}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeedReview