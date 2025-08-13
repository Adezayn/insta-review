import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import vendorReducer from './vendorSlice'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
    vendors: vendorReducer,
    auth: authReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store