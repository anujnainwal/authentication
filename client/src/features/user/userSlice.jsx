import { createSlice } from "@reduxjs/toolkit";
import { checkEmail, registerUser } from "./user.thunk";

let initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  isSuccess: false,
  successMessage: null,
  accessToken: null,
  statusCode: null,
  userInfo: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    //checkEmail is exist or not
    builder.addCase(checkEmail.pending, (state, action) => {
      state.isLoading = true;
      state.isError = undefined;
      state.errorMessage = undefined;
      state.isSuccess = undefined;
      state.successMessage = undefined;
      state.accessToken = undefined;
      state.statusCode = undefined;
      state.refreshToken = undefined;
    });
    builder.addCase(checkEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.successMessage = action.payload;
    });
    builder.addCase(checkEmail.rejected, (state, action) => {
      console.log("errors", action.payload);
      let { data, status } = action.payload;
      state.isLoading = false;
      state.isSuccess = undefined;
      state.isError = true;
      state.statusCode = status;
      state.errorMessage = data.error;
    });

    //For user Registration
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.isLoading = true;
      state.isError = undefined;
      state.errorMessage = undefined;
      state.isSuccess = undefined;
      state.successMessage = undefined;
      state.accessToken = undefined;
      state.statusCode = undefined;
      state.refreshToken = undefined;
      state.userInfo = undefined;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      let { status, message, user, accessToken, refreshToken } = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.accessToken = accessToken;
      state.userInfo = user;
      state.statusCode = status;
      state.refreshToken = refreshToken;
      state.successMessage = message;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      let { data, status } = action.payload;
      state.isError = true;
      state.statusCode = status;
      state.errorMessage = data.error;
    });
  },
});

export default authSlice.reducer;
