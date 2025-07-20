// src/utils/api.ts
import axios from 'axios';
import store from '../redux/store';
import { loginSuccess, logout } from '../redux/slices/authSlice';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

api.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;

        if (err.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshRes = await axios.post(
                    'http://localhost:5000/auth/refresh-token',
                    {},
                    { withCredentials: true }
                );

                const { accessToken, role } = refreshRes.data;

                store.dispatch(loginSuccess({ token: accessToken, role }));

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (error) {
                store.dispatch(logout());
                return Promise.reject(error);
            }
        }

        return Promise.reject(err);
    }
);

export default api;
