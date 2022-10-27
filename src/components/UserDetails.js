import { Grid, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const UserDetails = ({
  fullName,
  setFullName,
  displayName,
  setDisplayName,
  isInputValid,
  setIsInputValid,
}) => {
  useEffect(() => {
    if (fullName.length < 3) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [fullName, displayName]);

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
      console.log(fullName);
      return;
    } else if (e.target.id === "displayName") {
      setDisplayName(e.target.value);
      console.log(displayName);
      return;
    }
  };

  let container = (
    <Box>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item> */}
      <Stack spacing={2} direction="row" sx={{ paddingTop: "3rem" }}>
        <Box>
          <Typography variant="h5">Welcome! First Things First...</Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            You can always change them later
          </Typography>
          <Box sx={{ paddingTop: "2rem" }}>
            <Typography>Full Name</Typography>
            <TextField
              id="fullName"
              label="Steve Jobs"
              variant="outlined"
              title="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              required
              value={fullName}
              onChange={(e) => handleChange(e)}
              fullWidth
            ></TextField>
            <Typography>Display Name</Typography>

            <TextField
              id="displayName"
              label="Steve"
              variant="outlined"
              title="displayName"
              name="displayName"
              placeholder="Enter Display Name"
              required
              fullWidth
              value={displayName}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </Box>
        </Box>
      </Stack>
      {/* </Grid> */}
      {/* </Grid> */}
    </Box>
  );

  return <>{container}</>;
};

export default UserDetails;
