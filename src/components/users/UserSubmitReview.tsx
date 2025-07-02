"use client"
import { createReview, updateRating } from '@/app/actions/actions';
import React, { useState } from 'react'
import ClickableRating from '../global/ClickableRating';
import { Textarea } from '../ui/textarea';
import FileUploader from '../global/FileUploader';
import { Button } from '../ui/button';
import { useAppSelector } from '@/redux/hooks';
import LoadingSpinner from '../global/LoadingSpinner';

const UserSubmitReview = () => {
  const {uid} = useAppSelector(state => state.users);
  const {id: vendorId} = useAppSelector(state => state.vendors);
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
        <div className='mt-4'>
         <ClickableRating handleClick={setRating}/>
         <Textarea className="mt-6" placeholder="Type your message here." value={review} onChange={(e)=>{setReview(e.target.value)}}/>
          <FileUploader file={file} setFile={setFile}/>
          <Button size="lg" className='mt-10' onClick={handleSubmitReview}>
            Submit a Review
          </Button>
          {loading && <LoadingSpinner />}
      </div>
  )
}

export default UserSubmitReview