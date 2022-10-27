import { useState } from "react";
import "./App.css";
import RegistrationStepper from "./components/RegistrationStepper";

function App() {
  const [fullName, setFullName] = useState([]);
  const [displayName, setDisplayName] = useState([]);
  const [isInputValid, setIsInputValid] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <RegistrationStepper
        fullName={fullName}
        setFullName={setFullName}
        displayName={displayName}
        setDisplayName={setDisplayName}
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    </div>
  );
}

export default App;
