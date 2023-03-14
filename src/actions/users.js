import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await api.get("/users");
  return response.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async (data) => {
  const response = await api.get(`/users/${data.id}`, data);
  return response.data;
});
