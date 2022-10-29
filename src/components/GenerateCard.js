import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardActionArea, Typography } from "@mui/material";

const GenerateCard = ({ details, isInputValid, setIsInputValid }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // if (isActive === true) {
    setIsInputValid(false);
    // }
  }, []);

  const selectCard = () => {
    if (isActive === false) {
      setIsActive(true);
      setIsInputValid(true);
    } else {
      setIsActive(false);
      setIsInputValid(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 220,
        height: "10rem",
        border: isActive ? "1px solid #6642e5" : "",
      }}
      onClick={() => selectCard()}
    >
      <CardActionArea>
        <Box padding="1rem">{details.icon}</Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.use}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GenerateCard;
