import React, {Fragment, useState }from "react";
import {Navigate} from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
import { authenticate, isLoggedIn } from "./helper/helper";
import Navbar from "./Navbar";


const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };

  const [values,setValue] = useState({
    name: "",
    team: "",
    manager: false,
    redirect:false
  });
  
  const [checked, setChecked] = useState(false);

  const {name,team,manager,redirect} =values;
  
  const handleChange = name => event=>{
    setValue({...values, [event.target.name]: event.target.value})
  }


//react redirect function

  const reDirect = () =>{
    if(redirect){
      return <Navigate to="/planningpoker" />
    }
  }

  return (
    <Fragment>
      <Navbar/>
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
              <h2>Cadency Commander</h2>
            </Box>
          </Grid>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Smart Login"
          />
          <TextField
            onChange={handleChange("name")}
            required
            label="First name"
            name="name"
            placeholder="First name"
            fullWidth
            value={name}
          />
          <TextField
            onChange={handleChange("team")}
            label="Team name"
            name="team"
            placeholder="Team name"
            fullWidth
            value={team}
          />

          <Button
            form="userForm"
            type="submit"
            variant="contained"
            color="primary"
            data-upgraded=",MaterialButton"
            style={btnstyle}
            halfWidth
            onClick={(e)=>{
              e.preventDefault();
              authenticate({name,team,manager}, ()=>{
                setValue({
                  name:"",
                  team:"",
                  manager: false,
                  redirect:true
                })
              })
            }}
          >
            JOIN SESSION
          </Button>

          <div>
            <FormControlLabel 
              control={
                <Checkbox 
                  onChange={()=>{
                      setChecked(!checked); 
                      //console.log(checked)
                      if (checked == true){
                        setValue({...values, manager:false})
                      }
                      else{
                        setValue({...values, manager:true})
                      }
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
