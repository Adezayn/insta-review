import React from 'react'

const VendorDetails = async ({params}: {params: Promise<{vendorId: string}>}) => {
  const vendorId = (await params).vendorId
  return (
    <div>Details about Vendor {vendorId}</div>
  )
}

export default VendorDetails; 