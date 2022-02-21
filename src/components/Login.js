/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
import { authenticate, getTeam, isLoggedIn, loginIn } from "./helper/helper";
import Navbar from "./Navbar";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };

  const [values, setValue] = useState({
    user: "",
    teamName: "",
    manager: false,
    redirect: false,
  });

  const [checked, setChecked] = useState(false);

  const { user, teamName, manager, redirect } = values;

  const handleChange = (name) => (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  //react redirect function

  const reDirect = () => {
    if (redirect) {
      return <Navigate to="/planningpoker" />;
    }
  };

  const loggedIn = () => {
    if (isLoggedIn()) {
      return <Navigate to="/planningpoker" />;
    }
  };

  return (
    <Fragment>
      {loggedIn()}
      <Navbar />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Box
              sx={{
                bgcolor: "primary.main",
                width: "100%",
                height: 40,
                border: 1,
                color: "white",
              }}
            >
              <h2>Planning Porker</h2>
            </Box>
          </Grid>

          {/* SMart LOgin */}

          {getTeam() != null && console.log(getTeam().userData) &&
            <>
              <Typography color="text.secondary">
                <b>Smart Login :</b>
              </Typography>
              <Box
                sx={{
                  padding: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 68,
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "2px solid #3f51b5",
                  },
                }}
              >
                <Paper elevation={4}>
                  <Typography color="text.secondary">
                    {getTeam().teamName}
                  </Typography>
                </Paper>
              </Box>
            </>
          }


          <TextField
            onChange={handleChange("user")}
            required
            label="First name"
            name="user"
            placeholder="First name"
            fullWidth
            value={user}
          />
          <TextField
            onChange={handleChange("teamName")}
            label="Team name"
            name="teamName"
            placeholder="Team name"
            fullWidth
            value={teamName}
          />

          <Button
            data-testid="button1"
            form="userForm"
            type="submit"
            variant="contained"
            color="primary"
            data-upgraded=",MaterialButton"
            style={btnstyle}
            onClick={(e) => {
              loginIn({ user, teamName, manager })
                .then((data) => {
                  console.log(data);
                  authenticate(data, () => {
                    setValue({
                      user: "",
                      teamName: "",
                      manager: false,
                      redirect: true,
                    });
                  });
                })
                .catch((err) => console.log(err));
            }}
          >
            JOIN SESSION
          </Button>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => {
                    setChecked(!checked);
                    //console.log(checked)
                    setValue({ ...values, manager: !checked });
                    //console.log(manager)
                  }}
                  value={manager}
                />
              }
              label="Project Manager"
            />
          </div>
        </Paper>
        {reDirect()}
      </Grid>
    </Fragment>
  );
};

export default Login;
