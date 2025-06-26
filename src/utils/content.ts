import { IoFastFoodOutline, IoEllipsisHorizontalSharp } from "react-icons/io5";
import { GiClothes, GiSonicShoes, GiLipstick  } from "react-icons/gi";
import { MdOutlineRealEstateAgent, MdEventAvailable } from "react-icons/md";
import { FaFemale } from "react-icons/fa";


export const categoriesList = [
    { name: 'Food', icon: IoFastFoodOutline}, 
    // { name:'Fashion', icon: IoFastFoodOutline}, 
    { name: "Men's Wears", icon: GiClothes},
    { name: "Women's Wears", icon: FaFemale }, 
    { name: "Shoes", icon: GiSonicShoes },
    { name: "Real Estate", icon: MdOutlineRealEstateAgent},
    { name: "Event Planning", icon: MdEventAvailable },
    { name: "Beauty", icon: GiLipstick },
    { name: "Others", icon: IoEllipsisHorizontalSharp}
]
