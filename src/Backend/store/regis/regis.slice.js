import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./regis.thunk";

const initialState = {
  status: 'idle',
  message: '',
  error: null
};

const regisSlice = createSlice({
  name: 'regis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default regisSlice.reducer;
