import { VendorType } from "@/utils/types";
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
  image: "",
  description: "",
  averageRating: 0,
  totalRating: 0,
  positiveFeedback: 0,
  ratingsCount: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
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
        state.totalRating = payload.totalRating;
        state.ratingsCount = payload.ratingsCount;
        state.positiveFeedback = payload.positiveFeedback
      },
  }
});
export const { updateVendor } = vendorSlice.actions;

export default vendorSlice.reducer;