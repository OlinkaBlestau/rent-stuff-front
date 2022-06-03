import axios from "axios";


const DEFAULT_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
}

const AUTH_HEADERS = (authToken) => {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${authToken}`
    }
}

export const updateUser = (id, params, authToken) => axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, params, {headers: AUTH_HEADERS(authToken)});
export const fetchUser = (id, authToken) => axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {headers: AUTH_HEADERS(authToken)});
export const createAnnouncement = (params, authToken) => axios.post(`${process.env.REACT_APP_API_URL}/thing`, params, {headers: AUTH_HEADERS(authToken)});
export const createShop = (params, authToken) => axios.post(`${process.env.REACT_APP_API_URL}/shop`, params, {headers: AUTH_HEADERS(authToken)});
export const fetchCreateUser = (params) => axios.post(`${process.env.REACT_APP_API_URL}/register`, params);
export const fetchLoginUser = (params) => axios.post(`${process.env.REACT_APP_API_URL}/login`, params)
export const shelters = () => axios.get(`${process.env.REACT_APP_API_URL}/shelters`, {headers: DEFAULT_HEADERS});
export const fetchCategory = (authToken) => axios.get(`${process.env.REACT_APP_API_URL}/category/`, {headers: AUTH_HEADERS(authToken)});

