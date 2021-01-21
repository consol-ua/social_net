import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9" },
});

export const userAPI = {
  getUsers(pageSize = 5, pageNumber = 1) {
    return instanse
      .get(`users?count=${pageSize}&page=${pageNumber}`)
      .then((response) => response.data);
  },
  delFollowUser(id) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  postFollowUser(id) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
  getUserProfile(userId) {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },
  getAuth() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
};
