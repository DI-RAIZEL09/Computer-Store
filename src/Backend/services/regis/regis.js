import { apiRoot } from "../../api/axiosInterceptors";


export const api = {
    postLoginReq: (data) => apiRoot.post("users/auth-login/", data),
    postForgotReq: (email) => apiRoot.post("users/password-reset/", email),
    postCodeReq: (code) => apiRoot.post("users/confirm-password-reset-code/", { code }),
    postResetPasswordReq: (data, token) => apiRoot.post("users/password-reset-confirm/", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    
    register: (data) => apiRoot.post("users/register/", data)
};
