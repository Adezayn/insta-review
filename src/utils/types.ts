import { Timestamp } from "firebase/firestore";

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
  comment: string;
  createdAt: Date;
  rating: number;
};

export type ReviewResponseType = {
  id: string;
  reviewerId: string;
  image: string;
  reviewerName: string;
  vendorImage: string;
  vendorId: string;
  vendorName: string;
  comment: string;
  createdAt: Timestamp;
  rating: number;
};


export type CreateReviewType = {
  reviewerId: string | null;
  vendorId: string;
  comment: string;
  rating: number;
  imageUrl?: string
};

export type VendorType = {
  name: string; // full name for reviewer, business name for vendors
  address: { city: string; state: string; country: string };
  email: string;
  instagramHandle: string;
  category: string[];
  image: string;
  description: string;
  id: string;
  averageRating: number;
  totalRating: number;
  positiveFeedback: number;
  ratingsCount: {1: number, 2: number, 3: number, 4: number, 5: number }
  isTopTalent: boolean;
};
