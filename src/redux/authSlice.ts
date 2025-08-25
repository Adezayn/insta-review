// import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

type AuthType = {
  userId: string | null;
  email: string | null;
  name: string | null;
  role: 'user' | 'vendor' | null;
  token?: string | null; // optional: if you're storing auth token
 // isAuthenticated: boolean;
  //loading: boolean; // useful for login/logout async actions
 // error: string | null;
}
const initialState: AuthType = {
    email: "",
    name: "",
    userId: "",
    role: null
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      updateAuthInfo(state, {payload}) {
        console.log(payload, "insideupdateauthoinfo")
        state.email = payload.email;
        state.name = payload.name;
        state.role = payload.role;
        state.userId = payload.uid;
      },
  }
});
export const { updateAuthInfo } = authSlice.actions;

export default authSlice.reducer;