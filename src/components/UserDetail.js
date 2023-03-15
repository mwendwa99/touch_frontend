import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fetchUser } from "../reducers/userSlice";

const CenteredGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function UserDetail(props) {
  const { userId } = props;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.current);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) {
    return (
      <CenteredGrid container>
        <CircularProgress size={80} />
      </CenteredGrid>
    );
  }

  if (error) {
    return (
      <CenteredGrid container>
        <Typography sx={{ color: "red" }}>Error: {error}</Typography>
      </CenteredGrid>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {user.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          {user.email}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          {user.occupation}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          {user.bio}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserDetail;
