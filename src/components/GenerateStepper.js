import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

// import getMuiTheme from "material-ui/styles/getMuiTheme";

const GenerateStepper = ({ steps, activeStep }) => {
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#6642e5",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#6642e5",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 3,
    },
  }));

  return (
    <>
      {/* <MuiThemeProvider muiTheme={muiTheme}> */}
      <Stepper
        connector={<QontoConnector />}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label, index) => (
          <Step
            key={index}
            sx={{
              "& .MuiStepLabel-root .Mui-active": {
                color: "#6642e5",
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#6642e5",
              },
            }}
          >
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* </MuiThemeProvider> */}
    </>
  );
};

export default GenerateStepper;
