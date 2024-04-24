import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../Action/auth";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

const newSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  },
});

export default newSlice.reducer;




