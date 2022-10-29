import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const OnboardingComplete = ({ displayName }) => {
  let container = (
    <Box sx={{ paddingTop: "3rem" }}>
      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2} direction="row">
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                fontSize="large"
                sx={{
                  color: "#6642e5",
                }}
              />
              <Box sx={{ paddingTop: "2rem" }}>
                <Typography variant="h5">
                  Congratulations, {displayName}
                </Typography>
                <Typography variant="subtitle1">
                  You have completed onboarding, you can start using the Eden!
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  return <>{container}</>;
};

export default OnboardingComplete;
