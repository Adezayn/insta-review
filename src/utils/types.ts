export type User = {
  uid: string;
  fullName: string;
  address: { city: string; state: string; country: string };
  email: string;
  instagram: string;
  productInterests: string[];
};

export type Review = {
  id: string;
  reviewerId: string;
  vendorId: string;
  description: string;
  image: string;
  createdAt: Date;
  rating: string
}