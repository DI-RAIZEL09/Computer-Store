import { createSlice } from "@reduxjs/toolkit";
import { postSignIn } from "./auth.thunk";

const initialState = {
  login: {
    status: "INITIAL",
    token: "",
    message: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.login.token = "";
      state.login.status = "INITIAL";
      state.login.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignIn.pending, (state) => {
        state.login.status = "PENDING";
        state.login.message = "";
      })
      .addCase(postSignIn.fulfilled, (state, action) => {
        state.login.status = "SUCCESS";
        state.login.token = action.payload.access;
        state.login.message = "";
      })
      .addCase(postSignIn.rejected, (state, action) => {
        state.login.status = "ERROR";
        state.login.message = action.error.message || "Ошибка при авторизации!";
      });
  },
});

export const { logout } = authSlice.actions;

export const selectLogin = (state) => state.auth?.login || false;

export default authSlice.reducer;
