'use client'
import { categoriesList } from "@/utils/content"
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
              <div key={name} className="flex flex-col justify-center items-center border rounded p-12 w-full sm:w-2/5 lg:w-1/5 hover:shadow-lg cursor-pointer">
                <div className="mb-4">
                  <IconContainer icon={icon} size={36}/>
                </div>
                <p className="text-lg text-center">{name}</p>
              </div>
            )
          })
       }
       </div>
    </div>
  )
}

export default CategoriesSection