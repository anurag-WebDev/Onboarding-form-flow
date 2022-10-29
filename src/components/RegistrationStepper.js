import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import PageView from "./PageView";
import Header from "./Header";
import GenerateStepper from "./GenerateStepper";

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
      } else if (page === 2) {
        enqueueSnackbar("Please select Work Space Mode", {
          action: (snackbarId) => action(snackbarId),
          variant: "error",
        });
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: "100%" }}>
            <Header />

            <GenerateStepper steps={steps} activeStep={activeStep} />

            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", padding: "1rem" }}
            >
              <Grid item xs={12}>
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
            {/* <Grid container spacing={2}> */}
            {/* <Grid item xs={12}> */}
            <Button
              variant="contained"
              size="large"
              onClick={() => handleNext()}
              fullWidth
              sx={{
                marginLeft: "16px",
                backgroundColor: "#6642e5",
              }}
            >
              {activeStep === steps.length - 1
                ? "Launch Eden"
                : "Create Workspace"}
            </Button>
            {/* </Grid> */}
            {/* </Grid> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationStepper;
