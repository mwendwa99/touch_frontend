import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  user: {},
  isLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const response = await axios.get(
    `https://frontend-interview.touchinspiration.net/api/user/${userId}`
  );
  return response.data;
});

export const updateUserAsync = createAsyncThunk(
  "users/updateUserAsync",
  async (updatedUser) => {
    const response = await axios.patch(
      `https://frontend-interview.touchinspiration.net/api/user/${updatedUser.id}`,
      updatedUser
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateUser: (state, action) => {
      const userIndex = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state.data[userIndex] = action.payload;
      }
      state.user = action.payload;
    },
  },
});

export const { setUsers, setUser, setLoading, setError, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
