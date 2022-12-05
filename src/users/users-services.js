/*eslint-disable*/
import axios from "axios";

//Change api to handle ENV var
const USER_API_URL = 'http://localhost:4000/users'
const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await api.get(USER_API_URL)
    return response.data
}

export const createUser = async (user) => {
    const response = await api.post(USER_API_URL, user)
    return response.data
}

export const deleteUser = async(uid) => {
    const response = await api.delete(`${USER_API_URL}/${uid}`)
    return response.data
}

export const updateUser = async(user) => {
    await api.put(`${USER_API_URL}/${user._id}`, user)
    return user
}