'use client'
import { categoriesList } from "@/utils/content"
import { IconType } from "react-icons/lib";
import IconContainer from "../global/IconContainer";


const CategoriesSection = () => {
  return (
    <div className="flex flex-col items-center">
       <h2 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-3xl mb-8">Categories</h2>
       <div className="flex flex-wrap justify-center gap-6">
         {categoriesList.map(item => {
        const {name, icon} = item;
        return (
           <div key={name} className="flex flex-col justify-center items-center border rounded p-12 w-1/4 hover:shadow-lg">
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