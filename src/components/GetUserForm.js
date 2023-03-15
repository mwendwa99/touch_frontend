import { useState } from "react";
import { TextField, Button, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/users";
import UserDetail from "./UserDetail";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
  },
  button: {
    marginTop: "1rem",
  },
});

const GetUserForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const isLoading = useSelector((state) => state.users.isLoading);
  const user = useSelector((state) => state.users.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(userId));
  };
  console.log("user", user);

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: "bold" }}>
          Get User
        </Typography>
        <TextField
          name="userId"
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
          sx={{ my: 1 }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Get User"}
        </Button>
      </form>
      {user && <UserDetail user={user} />}
    </div>
  );
};

export default GetUserForm;
