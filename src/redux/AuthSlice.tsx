import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'


export interface AuthState {
    isAuthenticated: boolean;
    userId: string | null;
    message: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userId: null,
    message: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
};

export interface LoginCredentials {
    mail: string;
    password: string;
}

export interface LoginResponse {
    userId: string;
    message: string;
    accessToken: string;
    refreshToken: string;
}

/* export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials>(
    'auth/login',
    async (credentials) => {
        const response = await axios.post('http://localhost:3000/users', credentials);
        return response.data;
    }); */
    export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials>(
        'auth/login',
        async (credentials) => {
            try {
                const response = await axios.get(`https://db.aymoose.devodev.online/users?mail=${credentials.mail}`);
                const users = response.data;
    
                if (users.length > 0) {
                    const user = users[0];
                    if (user.password === credentials.password) {
                        return {
                            userId: user.id,
                            message: 'Giriş başarılı',
                            accessToken: 'sample_access_token',
                            refreshToken: 'sample_refresh_token', 
                        };
                    } else {
                        throw new Error('Şifre hatalı');
                    }
                } else {
                    throw new Error('Kullanıcı bulunamadı');
                }
            } catch (error) {
                console.error("Hata:", error);
                throw error;
            }
        }
    );
    
    
    

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.userId = action.payload.userId;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.message = action.payload.message;
                console.log(state.userId)
                console.log(state.accessToken)
                console.log(state.refreshToken)
                console.log(state.message)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Giriş başarısız oldu';
            });
    },
});
export const { } = authSlice.actions //for reducers

export default authSlice.reducer