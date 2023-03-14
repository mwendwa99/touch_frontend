import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUserAsync, fetchUser } from "../actions/users";

const initialState = {
  data: [],
  user: {},
  isLoading: false,
  error: null,
};

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

export const fetchUsersAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const users = await fetchUsers();
    dispatch(setUsers(users));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const fetchUserAsync = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const user = await fetchUser(id);
    dispatch(setUser(user));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const updateUserAsyncThunk = (id, data) => async (dispatch) => {
  try {
    const user = await updateUserAsync(id, data);
    dispatch(updateUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default userSlice.reducer;
