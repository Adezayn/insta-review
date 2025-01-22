export type User = {
  uid: string;
  name: string; // full name for reviewer, business name for vendors
  address: { city: string; state: string; country: string };
  email: string;
  instagram: string;
  productInterests?: string[];
  role: string;
};

export type ReviewType = {
  id: string;
  reviewerId: string;
  image: string;
  name: string;
  vendorImage: string;
  vendorId: string;
  vendorName: string;
  description: string;
  createdAt: Date;
  rating: string;
};