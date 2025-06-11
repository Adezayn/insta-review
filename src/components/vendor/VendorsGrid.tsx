import { fetchAllVendors } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import VendorCard from "./VendorCard";


const VendorsGrid = async () => {
  const {result, error} =  await fetchAllVendors();
  if (error) return <p>failed...try again</p>;
  if (result.length === 0) return <EmptyList />;

  return( <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
       {result?.map((data) => {
         return (
           <VendorCard key={data.id} data={data} />
         );
       })}
     </div>
  );
}

export default VendorsGrid