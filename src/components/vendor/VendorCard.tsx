"use client"

import { VendorType } from "@/utils/types"
import Image from "next/image";
import RatingInfo from "../global/RatingInfo";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { updateVendor } from "@/redux/vendorSlice";
import { FaAward } from "react-icons/fa";

const VendorCard= ({data}: {data: VendorType}) => {
  const {image, name, description, totalRating, category, averageRating, isTopTalent}: VendorType = data;
  const dispatch = useAppDispatch();
  return (
     <Link href={`/vendors/${name}`} onClick={()=>{dispatch(updateVendor(data))}} className="cursor-pointer">
        <div className="rounded-md border border-gray-300 p-4 flex flex-row  flex-1">
          {image && <Image src={image} alt={name} />}
          <div>
            <p className="font-semibold mb-4">{name}</p>
            <div className="mb-4"><RatingInfo rating={totalRating} averageRating={averageRating} /></div>
            <p className="mb-4">{description}</p>
            <div className="flex gap-4">
              {category.map(each =><p className="py-1 px-3 bg-slate-200 rounded-full from-neutral-700 text-xs text-black" key={each}>{each}</p>)}
            </div>
           {/* {isTopTalent && 
              <div className="flex items-center gap-2 mt-8 text-sm">
                <FaAward />
                <p className="">Top Rated</p>
              </div>
            } */}
          </div>
        </div>
     </Link>
  );
}

export default VendorCard;