"use client"
import { createReview, updateRating } from '@/app/actions/actions';
// import { uploadFileToDb } from '@/app/actions/storage';
import ClickableRating from '@/components/global/ClickableRating';
import FileUploader from '@/components/global/FileUploader';
import LoadingSpinner from '@/components/global/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';

const VendorDetails = () => {
  const {id: vendorId, name} = useAppSelector(state => state.vendors);
  const {uid} = useAppSelector(state => state.users);

  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>();


  const handleSubmitReview = async () => {
   let urlVal;
   if(!review) return;
   setLoading(true);
    try{
      if(file){
        // const result = await uploadFileToDb(file, uid);
        // let {url} = result;
        //  urlVal = url
      }
      const reviewPayload = {
          description: review,
          vendorId,
          reviewerId: uid,
          rating,
          imageUrl: urlVal || ''
      }
      await createReview(reviewPayload);
      await updateRating(vendorId, rating);
      setRating(0);
      setReview('');
    }
    catch(e){
      console.log(e, "---handleSubmitReview error--")
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='mx-12'>
      <p>{name}</p>
      <div className='mt-4'>
         <ClickableRating handleClick={setRating}/>
         <Textarea className="mt-6" placeholder="Type your message here." value={review} onChange={(e)=>{setReview(e.target.value)}}/>
          <FileUploader file={file} setFile={setFile}/>
          <Button size="lg" className='mt-10' onClick={handleSubmitReview}>
            Submit a Review
          </Button>
      </div>
         {loading && <LoadingSpinner />}
    </div>
  )
}

export default VendorDetails; 