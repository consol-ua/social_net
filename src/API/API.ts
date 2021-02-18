import axios from "axios";
import { GetAuthType, GetUsersType } from "./ApiType";
// AM_BgcXnCLxXsK3
//test API server
const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9" },
});

export const userAPI = {
  getUsers(pageSize = 5, pageNumber = 1) {
    return instanse
      .get<GetUsersType>(`users?count=${pageSize}&page=${pageNumber}`)
      .then((response) => response.data);
  },
  delFollowUser(id: number) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  postFollowUser(id: number) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
  getUserProfile(userId: number) {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },
  getAuth() {
    return instanse.get<GetAuthType>(`auth/me`).then((response) => response.data);
  },

};

export const authAPI = {
  login(email: string, password: string, rememberMe: boolean) {
    return instanse.post(`/auth/login`, { email, password, rememberMe }).then((res) => res.data);
  },
  unLogin() {
    return instanse.delete(`/auth/login`).then((res) => res.data);
  }
}