import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import vendorReducer from './vendorSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
    vendors: vendorReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store