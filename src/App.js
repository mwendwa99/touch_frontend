import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import UpdateUserForm from "./components/UpdateUserForm";
import { Container, Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, m: 2 }}>
      <Container maxWidth="lg">
        <UpdateUserForm />
        <UserList />
      </Container>
    </Box>
  );
};

export default App;
