"use client"
import ReviewsPerVendor from '@/components/review/ReviewsPerVendor';
import UserSubmitReview from '@/components/users/UserSubmitReview';
import { useAppSelector } from '@/redux/hooks';

const VendorDetails = () => {
  const {id: vendorId, name} = useAppSelector(state => state.vendors);

  return (
    <div className='mx-12'>
      <p>{name}</p>
      <UserSubmitReview />
      <ReviewsPerVendor vendorId={vendorId} />
    </div>
  )
}

export default VendorDetails; 