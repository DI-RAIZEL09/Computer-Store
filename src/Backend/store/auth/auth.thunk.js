import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInReq } from "../../services/auth/auth";

export const postSignIn = createAsyncThunk(
  "auth/postSignIn",
  async (username, password, { rejectWithValue }) => {
    try {
      const { data } = await signInReq(username, password);
      console.log(data);
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      return { access: data.access, refresh: data.refresh };
    } catch (error) {
      return rejectWithValue(error.reducers?.data?.message || "Неверный email или пароль");
    }
  }
);

