import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/auth/auth";
import { toast } from 'react-toastify';


export const login = createAsyncThunk(
  "auth/login",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.postLoginReq(userData)
      navigate("/admin");
      toast.success("Вы успешно вошли в систему");
      return data.access;
    } catch (error) {
      toast.error("Ошибка входа. Попробуйте еще раз.");
      return rejectWithValue(error.response.data.detail);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email, navigate, again }, { rejectWithValue }) => {
    try {
      if (!email) {console.log("Please enter your email")}
      const response = await api.postForgotReq(email);
      if (!again) { 
        navigate("/code-password");
      }
      toast.success('Код подтверждения отправлен на вашу почту!');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error('Ошибка при повторного отправлении!');
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPasswordCode = createAsyncThunk(
  'auth/resetPasswordCode',
  async ({ code, navigate }, { rejectWithValue }) => {
    console.log(code);
    try {
      const response = await api.postCodeReq(code);
      navigate("/reset-password", {state: response.data.token});
      toast.success('Пароль успешно сброшен введите новый пароль!');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error('Вы неверно указали код подтверждения!');
      return rejectWithValue(error.response?.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/new-password',
  async ({ new_password, token, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.postResetPasswordReq(new_password, token);
      toast.success('Пароль успешно изменен!');
      navigate("/login");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error('Ошибка при изменении пароля!');
      return rejectWithValue(error.response?.data || 'Произошла ошибка, попробуйте снова.');
    }
  }
);
