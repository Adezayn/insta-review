import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState: User = {
    email: "",
    name: "",
    address: {
        city: "",
        country: "",
        state: ""
    },
    instagram: "",
    uid: "",
    role: ""
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      updateUser(state, {payload}) {
        state.email = payload.email;
        state.name = payload.name;
        state.address.city = payload.city;
        state.address.country = payload.country;
        state.address.state = payload.state;
        state.role = payload.role;
        state.instagram = payload.instagram;
        state.productInterests = payload.productInterests;
        state.uid = payload.uid;
      },
  }
});
export const {updateUser} = userSlice.actions;

export default userSlice.reducer;