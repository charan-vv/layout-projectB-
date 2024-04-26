import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_API_WEB_URL;

export const addPost = createAsyncThunk(
  'post/addPost',
  async (dataObject, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/fakeData`, dataObject);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/fakeData`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/fakeData/${postId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchCustomerById = createAsyncThunk(
  'post/fetchCustomerById',
  async (postId, { rejectWithValue }) => {
    if (!postId) {
      return rejectWithValue('Post ID is undefined');
    }

    try {
      const response = await axios.get(`${API_URL}/fakeData/${postId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const updateCustomer = createAsyncThunk(
  'customer/update',
  async ({ id, ...customerData }) => {
    try {
      const response = await axios.put(`${API_URL}/fakeData/${id}`, customerData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);

