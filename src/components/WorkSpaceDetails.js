import React from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";

const WorkSpaceDetails = () => {
  let container = (
    <Box>
      <Stack spacing={2} direction="row" sx={{ paddingTop: "2rem" }}>
        <Box>
          <Typography variant="h5">
            Let's set up a home for all your work
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            You can always create another workspace later.
          </Typography>
          <Box sx={{ paddingTop: "2rem" }}>
            <Typography>Workspace Name</Typography>

            <TextField
              id="workSpaceName"
              label="Eden"
              variant="outlined"
              title="workSpaceName"
              name="workSpaceName"
              placeholder="Enter Workspace Name"
              required
              fullWidth
            ></TextField>
            <Typography>Workspace URL(optional)</Typography>
            <TextField
              id="workspaceUrl"
              label="Example"
              variant="outlined"
              title="workspaceUrl"
              name="workspaceUrl"
              placeholder="Example"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    www.eden.com/
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
  return <>{container}</>;
};

export default WorkSpaceDetails;
