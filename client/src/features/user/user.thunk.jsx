import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateAxios } from "../../api/privateAxios";

export const checkEmail = createAsyncThunk(
  "user/checkEmail",
  async (email, { rejectWithValue }) => {
    try {
      let response = await privateAxios.get(`/isExist?email=${email}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      let response = await privateAxios.post("/register", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  }
);
