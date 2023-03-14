import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/users";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUsers());
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Occupation</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.occupation}</td>
              <td>{user.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
