import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <UserList />
    </Container>
  );
};

export default App;
