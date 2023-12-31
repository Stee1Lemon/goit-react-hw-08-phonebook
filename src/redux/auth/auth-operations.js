import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk('auth/register', async body => {
  try {
    const { data } = await axios.post('/users/signup', body);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async body => {
  try {
    const { data } = await axios.post('/users/login', body);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return rejectWithValue();
    token.set(persistedToken);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
};

export default authOperations;
