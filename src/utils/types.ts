export type User = {
  uid: string;
  name: string; // full name for reviewer, business name for vendors
  address: { city: string; state: string; country: string };
  email: string;
  instagram: string;
  productInterests?: string[];
  role: string;
};

export type Review = {
  id: string;
  reviewerId: string;
  vendorId: string;
  description: string;
  image: string;
  createdAt: Date;
  rating: string;
  name: string;
}