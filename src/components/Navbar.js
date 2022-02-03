import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import {endSession, isAuthenticated} from "./helper/helper"
import { Navigate } from "react-router-dom";
// import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar({history}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div style={{ width: "100%" }}>

           {!isAuthenticated() && 
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
                          <Button variant="outlined" href="/">
                            Help
                          </Button>
                        </Box>
           } 
            {isAuthenticated() && isAuthenticated().teamDetails.manager == true && <>
              {/* navbar for project manager */}
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
                          <Button variant="outlined" href="/" onClick={()=>{
                            endSession()
                          }}> 
                            End Session
                          </Button>
                        </Box>
            </>
            }
            {isAuthenticated() && isAuthenticated().teamDetails.manager == false && <>
              {/* navbar for member */}
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
                          <Button variant="outlined" href="/" onClick={()=>{
                            endSession()
                          }}> 
                            End Session
                          </Button>
                        </Box>
            
            </>
            }
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
