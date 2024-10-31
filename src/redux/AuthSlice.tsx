import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'


export interface AuthState {
    isAuthenticated: boolean;
    message: string | null;
    accessToken: string | null;
    token_type: string | null;
    refreshToken: string | null;
    loading: boolean;
    error: string | null;
    expires_in: number | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    message: null,
    accessToken: null,
    token_type: null,
    refreshToken: null,
    loading: false,
    error: null,
    expires_in: null,
};

export interface LoginUserInput {
    mail: string;
    password: string;
}

export interface LoginResponse {
    token_type: string;
    expires_in: number;
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
    
    export const loginUser = createAsyncThunk<LoginResponse, LoginUserInput>(
        'auth/login',
        async (credentials) => {
            try {
                const response = await axios.get(`https://db.aymoose.devodev.online/users?mail=${credentials.mail}`);
                const users = response.data;
    
                if (users.length > 0) {
                    const user = users[0];
                    if (user.password === credentials.password) {
                        return {
                            token_type: 'Bearer',
                            expires_in: 3600,
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
                state.token_type=action.payload.token_type;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.expires_in = action.payload.expires_in;
                state.message = action.payload.message;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Giriş başarısız oldu';
            });
    },
});
export const { } = authSlice.actions //for reducers

export default authSlice.reducer