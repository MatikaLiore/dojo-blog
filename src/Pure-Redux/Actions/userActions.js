import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from './actionTypes'

export const LoginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials
})

export const LoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const Logout = () => ({
    type: LOGOUT,
})

