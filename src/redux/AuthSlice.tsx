import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const loginUser = createAsyncThunk<LoginResponse, LoginUserInput>(
  "auth/login",
  async (credentials) => {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("client_id", "aymoose-web-ui");
    params.append("username", credentials.mail);
    params.append("password", credentials.password);

    const authUrl = import.meta.env.VITE_KEYCLOAK_URL;

    const response = await axios.post(
      authUrl + "/realms/aymoose/protocol/openid-connect/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("response is waiting");
    console.log(response);
    return {
      token_type: response.data.token_type,
      expires_in: response.data.expires_in,
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      message: "Giriş başarılı",
    };
  }
);

const authSlice = createSlice({
  name: "auth",
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
        state.token_type = action.payload.token_type;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.expires_in = action.payload.expires_in;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Giriş başarısız oldu";
      });
  },
});
export const {} = authSlice.actions; //for reducers

export default authSlice.reducer;
