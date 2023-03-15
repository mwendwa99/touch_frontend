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
    `https://frontend-interview.touchinspiration.net/api/users/${userId}`
  );
  return response.data;
});

export const updateUserAsync = createAsyncThunk(
  "users/updateUserAsync",
  async (updatedUser) => {
    const response = await axios.patch(
      `https://frontend-interview.touchinspiration.net/api/users/${updatedUser.id}`,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const userIndex = state.data.findIndex(
          (user) => user.id === action.payload.id
        );
        if (userIndex !== -1) {
          state.data[userIndex] = action.payload;
        }
        state.user = action.payload;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUsers, setUser, setLoading, setError, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
