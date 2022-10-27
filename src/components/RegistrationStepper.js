import React from "react";
import { Box, Card, Button, Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PageView from "./PageView";
import Header from "./Header";

const RegistrationStepper = ({
  fullName,
  setFullName,
  displayName,
  setDisplayName,
}) => {
  const steps = [1, 2, 3, 4];
  const [activeStep, setActiveStep] = React.useState(0);
  const [page, setPage] = React.useState(0);

  // console.log(nameDetails);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      setPage(0);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: "100%" }}>
            <Header />

            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                activeColor: "purple",
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", padding: "1rem" }}
            >
              <Grid item>
                <PageView
                  page={page}
                  fullName={fullName}
                  setFullName={setFullName}
                  displayName={displayName}
                  setDisplayName={setDisplayName}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleNext()}
                  sx={{ marginLeft: "16px" }}
                  fullWidth
                >
                  {activeStep === steps.length - 1
                    ? "Launch Eden"
                    : "Create Workspace"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationStepper;
