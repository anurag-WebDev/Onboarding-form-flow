import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const WorkSpaceSetup = () => {
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
                  <Grid container>
                    <Grid item xs={12}>
                      <Card
                        sx={{
                          maxWidth: 220,
                          height: "10rem",
                        }}
                      >
                        <CardActionArea>
                          <PersonIcon />

                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              For Myself
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Write better.Think more clearly.Stay organized.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                      <Card sx={{ maxWidth: 220, height: "10rem" }}>
                        <CardActionArea>
                          <GroupsIcon />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              With my team
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Wikis,docs,tasks & projects, all in one place.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
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
