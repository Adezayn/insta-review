
import { FilterInput } from "@/components/global/FilterInput";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Input } from "@/components/ui/input";
import VendorsGrid from "@/components/vendor/VendorsGrid";
import { categoriesList } from "@/utils/content";
import { Suspense } from "react";


const VendorsPage = async () => {
  return (
    <main className="w-full bg-gray-50 overflow-y-auto">
         {/* <Navbar /> */}
          <div className="mx-6">
               <div className="flex justify-between">
                  <div className="w-1/2">
                    <FilterInput />
                  </div>
                  <div className="w-1/3">
                    <Input placeholder="search" />
                  </div>
               </div>
                <Suspense fallback={<LoadingContainer />}>
                  <VendorsGrid  />
                </Suspense>
          </div>
    </main>
  )
}

export default VendorsPage