// src/redux/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    token: string | null;
    role: string | null;
}

const initialState: User = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;

            localStorage.setItem('token', action.payload.token || '');
            localStorage.setItem('role', action.payload.role || '');
        },

        logout: (state) => {
            state.token = null;
            state.role = null;

            localStorage.removeItem('token');
            localStorage.removeItem('role');
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
