import { useSelector } from "react-redux";
import { Typography, CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const CenteredGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function UserDetail(props) {
  const { user } = props;
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

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
          {user.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <span style={{ fontWeight: "bold" }}>Email:&nbsp;</span>
          {user.email}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <span style={{ fontWeight: "bold" }}>Occupation:&nbsp;</span>
          {user.occupation}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}>Bio:&nbsp;</span>
          {user.bio}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserDetail;
