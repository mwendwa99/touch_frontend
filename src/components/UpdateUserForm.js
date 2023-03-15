import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAsync } from "../actions/userActions";
import { Button, TextField, Grid, Typography } from "@mui/material";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.isLoading);
  const user = useSelector((state) => state.users.user);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, occupation, bio };
    // trim the id
    const trimId = id.trim();
    dispatch(updateUserAsync(trimId, data));
  };

  return (
    <form onSubmit={handleSubmit}>
      {user && (
        <div>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            sx={{ color: "green" }}
          >
            {/* {updateduser.name} has been updated */}
          </Typography>
        </div>
      )}
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
        disabled={isLoading}
      >
        Update
      </Button>
    </form>
  );
};

export default UpdateUserForm;
