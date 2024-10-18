import { apiRoot } from "../../api/axiosInterceptors";

export const api = {
  postLoginReq: (data) => apiRoot.post("users/auth-login/", data),
  postForgotReq: (email) => apiRoot.post("users/password-reset/", email),
  postCodeReq: (code) => apiRoot.post("users/confirm-password-reset-code/", { code }),
  postResetPasswordReq: (data) => apiRoot.post("users/password-reset-confirm/", data),
};
