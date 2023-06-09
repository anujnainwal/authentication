import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./user/userSlice";
const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
