import axios from "axios";

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
