import { setLoading, setUsers, setError, setUser } from "../reducers/userSlice";
import { getUsers, updateUser, getUser } from "../api/users";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser = (id) => async (dispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const user = await getUser(id);
//     dispatch(setUser(user));
//   } catch (error) {
//     dispatch(setError(error));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (id, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const user = await getUser(id);
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const users = await getUsers();
    dispatch(setUsers(users));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateUserAsync = (id, data) => async (dispatch) => {
  try {
    const updatedUser = await updateUser(id, data);
    dispatch(updateUser({ id, changes: updatedUser }));
  } catch (error) {
    console.log(error);
  }
};
