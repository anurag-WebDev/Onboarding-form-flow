import React from "react";
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
  isInputValid,
  setIsInputValid,
}) => {
  let pageToDisplay;
  if (page === 0) {
    pageToDisplay = (
      <UserDetails
        fullName={fullName}
        setFullName={setFullName}
        displayName={displayName}
        setDisplayName={setDisplayName}
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    );
  } else if (page === 1) {
    pageToDisplay = (
      <WorkSpaceDetails
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    );
  } else if (page === 2) {
    pageToDisplay = (
      <WorkSpaceSetup
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    );
  } else {
    pageToDisplay = <OnboardingComplete displayName={displayName} />;
  }
  return pageToDisplay;
};

export default PageView;
