import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import UpdateUserForm from "./components/UpdateUserForm";
import GetUserForm from "./components/GetUserForm";
import { Container, Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, m: 2 }}>
      <Container maxWidth="lg">
        <UpdateUserForm />
        <GetUserForm />
        <UserList />
      </Container>
    </Box>
  );
};

export default App;
