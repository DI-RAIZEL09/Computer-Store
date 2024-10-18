import axios from "axios";

export const apiRoot = axios.create({
    baseURL: "http://178.128.127.0/api/"
});
