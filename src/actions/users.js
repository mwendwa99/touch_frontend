import { setLoading, setUsers, setError } from "../reducers/userSlice";
import { getUsers, updateUser } from "../api/users";

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
