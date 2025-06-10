"use client"

import { ReviewType, VendorType } from "@/utils/types"
import Image from "next/image";
import RatingInfo from "../global/RatingInfo";
import Link from "next/link";

const VendorCard= ({image, name, description, rating, category, averageRating, id}: VendorType) => {
  return (
    //  <Link href={`/vendors/${name}`}>
     <Link href={`/vendors/${id}`}>
        <div className="rounded-md border border-gray-300 p-4 flex flex-row justify-center text-center flex-1">
          {image && <Image src={image} alt={name} />}
          <div>
            <p className="font-semibold mb-4">{name}</p>
            <div className="mb-4"><RatingInfo rating={rating} averageRating={averageRating} /></div>
            <p className="mb-4">{description}</p>
            <div className="flex gap-4">
              {category.map(each =><p className="py-2 px-4 bg-slate-200 rounded-full from-neutral-700 text-sm" key={each}>{each}</p>)}
            </div>
          </div>
        </div>
     </Link>
  );
}

export default VendorCard;