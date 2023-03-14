import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/users";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

// material ui components
const UserListContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2rem",
});

const UserListHeader = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "1rem",
});

const RowHeader = styled(TableCell)({
  fontWeight: "bold",
  fontSize: "1.2rem",
});

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
    return (
      <UserListContainer>
        <CircularProgress />
      </UserListContainer>
    );
  }
  // console.log("users", users);

  return (
    <Box>
      <UserListHeader variant="h4">User List</UserListHeader>
      <Table>
        <TableHead>
          <TableRow>
            <RowHeader>ID</RowHeader>
            <RowHeader>Name</RowHeader>
            <RowHeader>Email</RowHeader>
            <RowHeader>Occupation</RowHeader>
            <RowHeader>Bio</RowHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.occupation}</TableCell>
              <TableCell>{user.bio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UserList;
