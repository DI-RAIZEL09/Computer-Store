import { apiRoot } from "../../api/axiosInterceptors";

export const signInReq = (data) => {
  return apiRoot.post("api/admin/login/", { data });
};
