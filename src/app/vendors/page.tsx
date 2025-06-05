
import LoadingContainer from "@/components/global/LoadingContainer";
import VendorsGrid from "@/components/vendor/VendorsGrid";
import { Suspense } from "react";


const VendorsPage = async () => {
  return (
    <main className="w-full bg-gray-50 overflow-y-auto">
         {/* <Navbar /> */}
          <div className="mx-6">
                <Suspense fallback={<LoadingContainer />}>
                  <VendorsGrid  />
                </Suspense>
          </div>
    </main>
  )
}

export default VendorsPage