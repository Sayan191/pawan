/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Box } from "@material-ui/core";
import { endSession, isAuthenticated, removePoinyts } from "./helper/helper";


// import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const {team} = isAuthenticated().teamDetails;

export default function Navbar({setShowContent= f=> f, showContent=undefined, showSelection=undefined ,setShowSelection=f=>f}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div style={{ width: "100%" }}>
            {!isAuthenticated() && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 1,
                  m: 1,

                  bgcolor: "primary",
                  borderRadius: 1,
                  color: "white",
                }}
              >
                <Button variant="contained" href="/">
                  Help
                </Button>
              </Box>
            )}
            {isAuthenticated() &&
              isAuthenticated().teamDetails.manager == true && (
                <>
                  {/* navbar for project manager */}
                  <Box
                    sx={{
                      display: "flex",
                      float: "left",
                      justifyContent: "flex-end",
                      p: 1,
                      m: 1,
                      bgcolor: "primary",
                      borderRadius: 1,
                      color: "yellow",
                    }}
                  >
                    <ButtonGroup variant="text" aria-label="text button group">
                      {/* New Session */}
                      <Button
                        href="/"
                        onClick={() => {
                          removePoinyts();
                        }}
                      >
                        New Session
                      </Button>

                      {/* Show Selection */}
                      <Button 
                          onClick={() => {
                            setShowSelection(!showSelection)
                          }}
                      >
                        Show Selection
                      </Button>

                      {/* Story POints */}
                      <Button 
                          onClick={() => {
                            setShowContent(!showContent)
                          }}
                        >
                          Story Points
                      </Button>

                    </ButtonGroup>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      float: "right",
                      justifyContent: "flex-end",
                      p: 1,
                      m: 1,
                      bgcolor: "primary",
                      borderRadius: 1,
                      color: "white",
                    }}
                  >
                    <ButtonGroup>
                      
                      {/* Team Name */}
                      <Button
                        variant="text"
                      >
                        Team: {team}
                      </Button>

                      {/* End Session */}
                      <Button
                        variant="contained"
                        href="/"
                        onClick={() => {
                          endSession();
                        }}
                      >
                        End Session
                      </Button>
                    </ButtonGroup>
                  </Box>
                </>
              )}
            {isAuthenticated() &&
              isAuthenticated().teamDetails.manager == false && (
                <>
                  {/* navbar for member */}
                  <Box
                    sx={{
                      display: "flex",
                      float: "right",
                      justifyContent: "flex-end",
                      p: 1,
                      m: 1,
                      bgcolor: "primary",
                      borderRadius: 1,
                      color: "white",
                    }}
                  >
                    <ButtonGroup>
                      <Button
                        variant="text"
                      >
                        Team: {team}
                      </Button>
                      <Button
                        variant="contained"
                        href="/"
                        onClick={() => {
                          endSession();
                        }}
                      >
                        End Session
                      </Button>
                    </ButtonGroup>
                  </Box>
                </>
              )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}