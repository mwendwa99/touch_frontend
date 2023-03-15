import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = async () => {
  const response = await axios.get(
    "https://frontend-interview.touchinspiration.net/api/users"
  );
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await axios.patch(
    `https://frontend-interview.touchinspiration.net/api/users/${id}`,
    data
  );
  return response.data;
};

export const getUser = createAsyncThunk("users/fetchUser", async (userId) => {
  try {
    const response = await axios.get(
      `https://frontend-interview.touchinspiration.net/api/users/${userId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

// export const getUser = createAsyncThunk(
//   "users/fetchUser",
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `https://frontend-interview.touchinspiration.net/api/users/${userId}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
