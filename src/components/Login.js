/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
import {
  authenticate,
  getUserData,
  isLoggedIn,
  loginIn,
} from "./helper/helper";
import Navbar from "./Navbar";

const Login = () => {
  //smart login array
  let smart = getUserData();

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
    error:"",
    redirect: false,
  });

  const [checked, setChecked] = useState(false);
  const { user, teamName, manager, error, redirect } = values;

  const handleChange = (name) => (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  //react redirect function

  const reDirect = () => {
    if (redirect) {
      return <Navigate to="/planningpoker" />;
    }
  };
  /*
it checks whether logged-in or not if true redirect to the planning poker page
*/
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
          
          { /* If error occurs this part gets displayed instantly */}
          <Typography 
            sx={{
              display: (error)=>(error != "" ? "" : "none"),
              color:"text.secondary"
          }}>
                    {error}
            </Typography>

          {/* SMart LOgin */}

          {getUserData() != null && (
            <>
              <Typography color="text.secondary">
                <b>Smart Login :</b>
              </Typography>

              {smart.map((index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      padding: 2,
                      display: "flex",
                      flexDirection: "row",
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
                        cursor: "pointer",
                      },
                    }} /*
                    after logged or not the values get set and on clicking the button the it takes the data from 
                    local storage
                    */
                    // onClick={() => {
                    //------------------------error setting setting values to state----------------
                    // setValue({
                    //   // ...values,
                    //   user: index.name,
                    //   teamName: index.teamName,
                    //   manager: index.manager,
                    //   redirect: true,
                    // });
                    // console.log(values);
                    //   loginIn(index.name, index.teamName, index.manager)
                    //     .then((data) => {
                    //       console.log(data);
                    //       authenticate(data, () => {
                    //         setValue({
                    //           user: "",
                    //           teamName: "",
                    //           manager: false,
                    //           redirect: true,
                    //         });
                    //       });
                    //     })
                    //     .catch((err) => console.log(err));
                    // }}
                  >
                    <Paper elevation={4}>
                      <Typography color="text.secondary">
                        {index.teamName}
                      </Typography>
                    </Paper>
                  </Box>
                );
              })}
            </>
          )}

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

                  // if error occurs we store the error value otherwise continue login
                  if(data.error){
                    setValue({...values,error:data.error})
                  }
                  else{
                    authenticate(data, () => {
                      setValue({
                        user: "",
                        teamName: "",
                        error:"",
                        manager: false,
                        redirect: true,
                      });
                    });
                  }
                })
                .catch((error) => setValue({...values,error:error}));
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