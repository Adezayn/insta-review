"use client"
import { updateRating } from '@/app/actions/actions';
import ClickableRating from '@/components/global/ClickableRating';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useParams } from 'next/navigation';

const VendorDetails = async () => {
    const params = useParams();
    console.log(params, "=======params====")
  const vendorName = decodeURIComponent(params.vendorId); 
  const handleSubmitRating = async (rate: number) => {
       await updateRating(vendorName, rate)
  };

  return (
    <div className='mx-12'>
      <p>{vendorName}</p>
      <div className='mt-4'>
         <ClickableRating handleClick={handleSubmitRating}/>
         <Textarea className="mt-6" placeholder="Type your message here." />
          <Button type="submit" size="lg" className='mt-10'>
            Submit a Review
          </Button>
      </div>
    </div>
  )
}

export default VendorDetails; 