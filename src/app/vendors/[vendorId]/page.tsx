"use client"
import { createReview, updateRating } from '@/app/actions/actions';
import ClickableRating from '@/components/global/ClickableRating';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAppSelector } from '@/redux/hooks';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const VendorDetails = () => {
  const {id: vendorId, name} = useAppSelector(state => state.vendors);
  const {uid} = useAppSelector(state => state.users);

  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);


  const handleSubmitReview = async () => {
    const reviewPayload = {
        description: review,
        vendorId,
        reviewerId: uid,
        rating
    }
    await createReview(reviewPayload);
    await updateRating(vendorId, rating);
  }

  return (
    <div className='mx-12'>
      <p>{name}</p>
      <div className='mt-4'>
         <ClickableRating handleClick={setRating}/>
         <Textarea className="mt-6" placeholder="Type your message here." value={review} onChange={(e)=>{setReview(e.target.value)}}/>
          <Button size="lg" className='mt-10' onClick={handleSubmitReview}>
            Submit a Review
          </Button>
      </div>
    </div>
  )
}

export default VendorDetails; 