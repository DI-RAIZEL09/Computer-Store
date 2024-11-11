import { createSlice } from "@reduxjs/toolkit";
import StatusResponse from "../../utils/StatusResponse";
import { 
  forgotPassword, 
  login,
  resetPassword,
  resetPasswordCode 
} from "./auth.thunk";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: StatusResponse.INITIAL,
    user: null,
    error: null,
    timer: 0,
    email: '', 
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = StatusResponse.INITIAL;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = StatusResponse.LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = StatusResponse.SUCCESS;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = StatusResponse.ERROR;
        state.error = action.payload || 'Ошибка при авторизации';
      });
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.status = StatusResponse.LOADING;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.status = StatusResponse.SUCCESS;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = StatusResponse.ERROR;
        state.error = action.payload || 'Ошибка при восстановлении пароля';
      });
    builder
      .addCase(resetPasswordCode.pending, (state) => {
        state.status = StatusResponse.LOADING;
        state.error = null;
      })
      .addCase(resetPasswordCode.fulfilled, (state) => {
        state.status = StatusResponse.SUCCESS;
        
        state.success = true;
      })
      .addCase(resetPasswordCode.rejected, (state, action) => {
        state.status = StatusResponse.ERROR;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(resetPassword.pending, (state) => {
        state.status = StatusResponse.LOADING;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = StatusResponse.SUCCESS;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = StatusResponse.ERROR;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { setEmail, reducer } = authSlice.actions;
export default authSlice.reducer;
