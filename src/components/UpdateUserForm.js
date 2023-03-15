import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAsync } from "../actions/users";
import {
  CircularProgress,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.users);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, occupation, bio };
    // stringify the data object
    const dataString = JSON.stringify(data);
    console.log(dataString);
    dispatch(updateUserAsync(id, dataString));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography gutterBottom variant="h4" sx={{ fontWeight: "bold" }}>
        Update User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="id"
            fullWidth
            label="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="name"
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="occupation"
            fullWidth
            label="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="bio"
            fullWidth
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        sx={{ my: "1rem" }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Update
      </Button>
    </form>
  );
};

export default UpdateUserForm;
