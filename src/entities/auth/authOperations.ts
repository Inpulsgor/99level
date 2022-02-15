import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials, RegistrationCredentials } from 'common/api/types';
import { instance, token } from 'common/api/instance';

const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/login', credentials);

      token.set(data.token);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegistrationCredentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/register', credentials);

      token.set(data.token);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const { status, statusText } = await instance.post('/logout');

      token.unset();

      return { status, statusText };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export { login, register, logout };
