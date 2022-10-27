import React from "react";
import { Box } from "@mui/material";
import UserDetails from "./UserDetails";
import WorkSpaceDetails from "./WorkSpaceDetails";
import WorkSpaceSetup from "./WorkSpaceSetup";
import OnboardingComplete from "./OnboardingComplete";

const PageView = ({
  page,
  fullName,
  setFullName,
  displayName,
  setDisplayName,
}) => {
  let pageToDisplay;
  if (page === 0) {
    pageToDisplay = (
      <UserDetails
        fullName={fullName}
        setFullName={setFullName}
        displayName={displayName}
        setDisplayName={setDisplayName}
      />
    );
  } else if (page === 1) {
    pageToDisplay = <WorkSpaceDetails displayName={displayName} />;
  } else if (page === 2) {
    pageToDisplay = <WorkSpaceSetup />;
  } else {
    pageToDisplay = <OnboardingComplete displayName={displayName} />;
  }
  return pageToDisplay;
};

export default PageView;
