import { User, Vendor, VendorType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState: VendorType = {
    email: "",
    name: "",
    address: {
        city: "",
        country: "",
        state: ""
    },
    instagramHandle: "",
    id: "",
    category: [],
    rating: 0,
    image: "",
    description: "",
    averageRating: 0
};


const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
      updateVendor(state, {payload}) {
        state.email = payload.email;
        state.name = payload.name;
        state.address.city = payload.city;
        state.address.country = payload.country;
        state.address.state = payload.state;
        state.category = payload.category;
        state.instagramHandle = payload.instagramHandle;
        state.description = payload.description;
        state.id = payload.id;
        state.averageRating = payload.averageRating;
        state.rating = payload.rating
      },
  }
});
export const { updateVendor } = vendorSlice.actions;

export default vendorSlice.reducer;