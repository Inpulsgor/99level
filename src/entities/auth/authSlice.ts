import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "models/auth";
import { REQUEST_STATUS } from "types/enum";
import { login } from "entities/auth/authOperations";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  error: null,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCEEDED;
    });
    builder.addCase(login.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.payload,
        status: REQUEST_STATUS.FAILED,
      };
    });
  },
});

export const { reset, updateAccessToken } = authSlice.actions;

export default authSlice;
