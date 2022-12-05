import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./users-services";




export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await service.logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await service.profile()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await service.findUserById(uid)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await service.login(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await service.register(user)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await service.findAllUsers()
)

export const createUserThunk = createAsyncThunk(
    'createUser',
    async (thunkAPI) => await service.createUser(thunkAPI)
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (user) => await service.updateUser(user)
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser', async (uid) => {
        await service.deleteUser(uid)
        return uid;
    }
)
