import React from "react";
import { Stack, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import GenerateCard from "./GenerateCard";

const WorkSpaceSetup = ({ isInputValid, setIsInputValid }) => {
  const workSpaceSetupDetails = [
    {
      id: 1,
      icon: <PersonIcon />,
      use: "Myself",
      body: "Write better.Think more clearly.Stay organized.",
    },
    {
      id: 2,
      icon: <GroupsIcon />,
      use: "With my team",
      body: "Wikis,docs,tasks & projects, all in one place.",
    },
  ];

  let container = (
    <Box>
      <Stack spacing={2} direction="column">
        <Box>
          <Box sx={{ paddingTop: "3rem" }}>
            <Typography variant="h5">
              How are you planning to use Eden?
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              We'll streamline your setup experience accordingly.
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "2rem" }}>
            <Grid container spacing={2}>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  {workSpaceSetupDetails.map((details, index) => (
                    <GenerateCard
                      key={index}
                      details={details}
                      isInputValid={isInputValid}
                      setIsInputValid={setIsInputValid}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Box>
  );

  return <>{container}</>;
};

export default WorkSpaceSetup;
