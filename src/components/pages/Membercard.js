// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        padding: 30,
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 118,
          height: 90,
          textAlign: "center",
          paddingTop: 65,
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "middle",
          borderRadius: "25px",
          border: "4px solid #3f51b5",
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
