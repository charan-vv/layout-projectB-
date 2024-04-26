import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_API_WEB_LOGIN;

export const addUser = createAsyncThunk(
    'post/addUser',
    async (dataObject, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${API_URL}/merchant`, dataObject);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );

  export const userLogin = createAsyncThunk(
    'post/userLogin',
    async (dataObject, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${API_URL}/user/login`, dataObject);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );