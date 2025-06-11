export type User = {
  uid: string;
  name: string; // full name for reviewer, business name for vendors
  address: { city: string; state: string; country: string };
  email: string;
  instagram: string;
  productInterests?: string[];
  role: string;
};

export type Vendor = User & {
   category: string[]
};

export type ReviewType = {
  id: string;
  reviewerId: string;
  image: string;
  reviewerName: string;
  vendorImage: string;
  vendorId: string;
  vendorName: string;
  description: string;
  createdAt: Date;
  rating: string;
};

export type CreateReviewType = {
  reviewerId: string;
  vendorId: string;
  description: string;
  rating: number;
};

export type VendorType = {
  name: string; // full name for reviewer, business name for vendors
  address: { city: string; state: string; country: string };
  email: string;
  instagramHandle: string;
  category: string[];
  rating: number;
  image: string;
  description: string;
  id: string;
  averageRating: number;

}