"use client"

import { ReviewType } from "@/utils/types"
import UserPng from "@/assets/images/user.png"
import Image from "next/image";
import { Rate } from "../global/RatingInfo";

const FeedReview = ({image, vendorImage, vendorName, reviewerName, createdAt, description, rating}: ReviewType) => {
  return (
    <div className="border border-gray-200 p-4 shadow-sm rounded-sm">
      <div className="flex items-center gap-2 border-b border-b-gray-200 pb-3">
        {image ? <Image src={image} alt={reviewerName} className="rounded" /> : <Image src={UserPng} alt="avatar" className="" width={40} height={40} unoptimized/>}
        <div>
          <p className="font-semibold text-sm mb-1">{reviewerName} wrote a review</p>
          <p className="text-xs">{createdAt?.toString() ?? createdAt}</p>
        </div>
      </div>
      <div>
        {vendorImage && <Image src={vendorImage} alt={reviewerName} />}
      </div>
      <div className="mt-3">
        <p className="font-bold mb-2">{vendorName}</p>
         <Rate averageRating={rating} />
        {description && <p className="text-sm mt-2">{description}</p>}
      </div>
    </div>
  );
}

export default FeedReview