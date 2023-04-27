import { axiosInstance } from "./axios";



export const RegisterUserApi = (data) => axiosInstance.post("/auth/register", data)
export const LoginUserApi = (data) => axiosInstance.post("/auth/login", data)
export const getLoggedInUserApi = () => axiosInstance.get("/user/getLoggedInUser")
export const logoutApi = () => axiosInstance.post("/auth/logout");
export const searchUserByNames = (username) => axiosInstance.get(`/user/search?search_query=${username}`)
export const searchUserByIdApi = (userId) => axiosInstance.get(`/user/search?userId=${userId}`)




// DEBATE API ENDPOINTS

export const createDebateApi = (data) => axiosInstance.post("/debate", data)
export const getDebateByIdApi = (debateId) => axiosInstance.get(`/debate?_id=${debateId}`)
export const getCurrentDebateApi = () => axiosInstance.get(`/debate?live=${true}`)
export const getAllDebateApi = () => axiosInstance.get(`/debate?upcoming=${true}`)
export const getDebateOfUserApi = (userId) => axiosInstance.get(`/debate?admin=${userId}`)
export const getAgoraTokenApi = ({ channelName, role, tokentype, uid, expiry }) => axiosInstance.get(`/auth/rte/${channelName}/${role}/${tokentype}/${uid}/?expiry=${expiry}`)
export const deleteDebateApi = (debateId) => axiosInstance.delete(`/debate/${debateId}`)
export const getUsersDebateCountApi = (userId) => axiosInstance.get(`/debate/counts/${userId}`)
export const joinParticipantApi =(debateId,data)=>axiosInstance.post(`/debate/joinParticipant/${debateId}`,data)
export const removeParticipantApi =(debateId,data)=>axiosInstance.post(`/debate/removeParticipant/${debateId}`,data)
export const getSingleDebateApi =(debateId) =>axiosInstance.get(`/debate/singleDebate/${debateId}`)
// chat bot api

export const getBotMessageApi = (data) => axiosInstance.post("/chatbot", data);
export const updateUserapi = (userId, data) => axiosInstance.put(`/user/${userId}`, data)

