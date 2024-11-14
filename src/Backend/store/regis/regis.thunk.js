import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/regis/regis";
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.postRegisterReq(userData);
      navigate("/login");
      toast.success("Вы успешно зарегистрировались!");
      return data;
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при регистрации. Попробуйте еще раз.");
      return rejectWithValue(error.response?.data || 'Произошла ошибка');
    }
  }
);

export const confirmEmail = createAsyncThunk(
  "auth/confirmEmail",
  async ({ email, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.postConfirmEmailReq(email);
      navigate("/code-confirmation");
      toast.success("Код подтверждения отправлен на вашу почту!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при отправке кода подтверждения.");
      return rejectWithValue(error.response?.data || 'Произошла ошибка');
    }
  }
);

export const verifyCode = createAsyncThunk(
  "auth/verifyCode",
  async ({ code, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.postVerifyCodeReq(code);
      navigate("/welcome");
      toast.success("Ваш аккаунт успешно подтвержден!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Неверный код подтверждения.");
      return rejectWithValue(error.response?.data || 'Произошла ошибка');
    }
  }
);