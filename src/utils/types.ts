export type User = {
  uid: string;
  fullName: string;
  address: { city: string; state: string; country: string };
  email: string;
  instagram: string;
  productInterests: string[];
};