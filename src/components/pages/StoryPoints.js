import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function SimplePaper() {

  let array = ["1","2","3","4","5","8","10","15","20"];

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
      {array.map((days,index)=>{
        return(
          <div>
          <Paper elevation={18} key = {index}>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            <Button
              onClick={() => {
                localStorage.setItem('days', JSON.stringify(days))
              }}
            >
              {days}
            </Button>
          </Typography>
        </Paper>
        </div>
        )
      })}
    </Box>
  );
}