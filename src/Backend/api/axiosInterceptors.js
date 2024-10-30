import axios from "axios";

export const apiRoot = axios.create({
    baseURL: "http://34.143.161.41/api/"
});
