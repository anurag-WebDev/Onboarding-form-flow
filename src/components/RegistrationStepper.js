import React from "react";
import { Box, Card, Button, Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSnackbar } from "notistack";
import PageView from "./PageView";
import Header from "./Header";

const RegistrationStepper = ({
  fullName,
  setFullName,
  displayName,
  setDisplayName,
  isInputValid,
  setIsInputValid,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const steps = [1, 2, 3, 4];
  const [activeStep, setActiveStep] = React.useState(0);
  const [page, setPage] = React.useState(0);

  const action = (snackbarId) => {
    return (
      <Button
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        Dismiss
      </Button>
    );
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      setPage(0);
      return;
    }

    if (isInputValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setPage((prevPage) => prevPage + 1);
    } else {
      if (page === 0) {
        enqueueSnackbar(
          "fullName and displayName are required fields and should have minimum 3 characters",
          {
            action: (snackbarId) => action(snackbarId),
            variant: "error",
          }
        );
      } else if (page === 1) {
        enqueueSnackbar(
          "Workspace name is required field and should have minimum 3 characters",
          {
            action: (snackbarId) => action(snackbarId),
            variant: "error",
          }
        );
      }
    }
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
                  isInputValid={isInputValid}
                  setIsInputValid={setIsInputValid}
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
