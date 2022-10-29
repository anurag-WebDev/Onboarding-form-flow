import React, { useEffect, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";

const WorkSpaceDetails = ({ isInputValid, setIsInputValid }) => {
  const [workSpaceName, setWorkSpaceName] = useState([]);

  useEffect(() => {
    if (workSpaceName.length < 3) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workSpaceName]);

  const handleChange = (e) => {
    if (e.target.id === "workSpaceName") {
      setWorkSpaceName(e.target.value);
      // console.log(fullName);
      return;
    }
  };

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
              onChange={(e) => handleChange(e)}
            ></TextField>
            <Typography>Workspace URL(optional)</Typography>
            <TextField
              id="workspaceUrl"
              label="Example"
              variant="outlined"
              title="workspaceUrl"
              name="workspaceUrl"
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
