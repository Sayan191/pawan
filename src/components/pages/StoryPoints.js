/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function SimplePaper() {
  const array = [1, 2, 3, 5, 8, 13, 20, 40];
  const classes = useStyles();
  const cardStyle = {
    color: "red",
    fontSize: 60,
  };
  return (
    <>
      <div>
        <Box
          className={classes.root}
          sx={{
            marginTop: 1,
            paddingTop: 2,
            paddingLeft: 90,
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 85,
              height: 120,
              textAlign: "right",
              paddingTop: 15,
              paddingRight: 20,
              justifyContent: "center",
              alignItems: "center",
              verticalAlign: "middle",
              borderRadius: "25px",
              border: "4px solid #3f51b5",
            },
          }}
        >
          {array.map((points, index) => {
            return (
              <div>
                <Button
                  size="small"
                  key={index}
                  onClick={() => {
                    localStorage.setItem("points", JSON.stringify(points));
                  }}
                >
                  <Paper elevation={0}>
                    <Typography style={cardStyle} gutterBottom>
                      {points}
                    </Typography>
                  </Paper>
                </Button>
              </div>
            );
          })}
        </Box>
      </div>
    </>
  );
}
