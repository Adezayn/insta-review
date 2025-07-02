"use client"
import LoadingContainer from '@/components/global/LoadingContainer';
import LoadingSpinner from '@/components/global/LoadingSpinner';
import ReviewsPerVendor from '@/components/review/ReviewsPerVendor';
import UserSubmitReview from '@/components/users/UserSubmitReview';
import { useAppSelector } from '@/redux/hooks';
import { Suspense } from 'react';

const VendorDetails = () => {
  const {id: vendorId, name} = useAppSelector(state => state.vendors);

  return (
    <div className='mx-12'>
      <p>{name}</p>
      <UserSubmitReview />
      <ReviewsPerVendor vendorId={vendorId} />
         {/* {loading && <LoadingSpinner />} */}
    </div>
  )
}

export default VendorDetails; 