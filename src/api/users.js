import axios from "axios";

// function to get user data from API endpoint
export const getUsers = () => {
  // use axios to get data from API endpoint
  const response = axios.get(
    "https://frontend-interview.touchinspiration.net/api/users"
  );
  return response.data;
};
