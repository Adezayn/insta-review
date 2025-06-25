'use client'
import { categoriesList } from "@/utils/content"
import { IconType } from "react-icons/lib";
import IconContainer from "../global/IconContainer";
import SectionTitle from "../global/SectionTitle";


const CategoriesSection = () => {
  return (
    <div className="my-20">
       <SectionTitle text="categories" />
       <div className="flex flex-wrap justify-between gap-4 mt-10">
         {categoriesList.map(item => {
        const {name, icon} = item;
        return (
           <div key={name} className="flex flex-col justify-center items-center border rounded p-12 w-1/5 hover:shadow-lg">
             <div className="mb-4">
               <IconContainer icon={icon} size={36}/>
             </div>
             <p className="text-lg">{name}</p>
           </div>
        )
       })}
       </div>
    </div>
  )
}

export default CategoriesSection