import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {getDays} from "../helper/helper";

export default function SimplePaper() {

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
           <b> Planning Porker</b>
        </Typography>
      </Paper>
    </Box>
  );
}
