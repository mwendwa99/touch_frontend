import { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/userActions";

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

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography
          gutterBottom
          variant="subtitle"
          align="center"
          sx={{ fontWeight: "bold", color: "red", fontStyle: "italic" }}
        >
          RUN 'GET USER' BELOW TO SEE THE UPDATED USER NEW DATA
        </Typography>
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
          Get User
        </Button>
      </form>
      <Grid
        container
        spacing={2}
        sx={{
          border: "solid 1px grey",
          my: "1rem",
          borderRadius: "5px",
          p: "1rem",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            {user.name || ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <span style={{ fontWeight: "bold" }}>Email:&nbsp;</span>
            {user.email || ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <span style={{ fontWeight: "bold" }}>Occupation:&nbsp;</span>
            {user.occupation || ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Bio:&nbsp;</span>
            {user.bio || ""}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetUserForm;
