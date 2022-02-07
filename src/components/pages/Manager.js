import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {getDays} from "../helper/helper";


const Manager = ({showSelection=undefined ,setShowSelection=f=>f}) => {  
  const [days,setDays] = useState("");

  const loadDays = ()=>{
    setDays({days:getDays()});
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 145,
          textAlign: "center",
          paddingTop: 65,
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "middle",
          borderRadius: "25px",
          border: "9px solid #3f51b5",
        },
      }}
    >
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
          {setShowSelection(showSelection) && showSelection == false && <b> Planning Porker</b>}
          {setShowSelection(showSelection) && showSelection == true && loadDays() && <b> {days}</b>}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Manager;
