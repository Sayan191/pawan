import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function SimplePaper() {

    const [days,setDays ] = useState("");

    const handleClick = name => events=>{
        events.preventDefault();
        setDays({ days: events.target.value})
    }
    console.log(days)

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
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "0"})}}
            >
                0
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "1"})}}
            >
                1
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "2"})}}
            >
                2
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "3"})}}
            >
                3
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "4"})}}
            >
                4
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "5"})}}
            >
                5
            </Button>
        </Typography>
      </Paper>
      <Paper elevation={18}>
        <Typography sx={{ fontSize: 22 }} color="text.secondary"  gutterBottom>
            <Button
                onClick={()=>{setDays({days: "8"})}}
            >
                8
            </Button>
        </Typography>
      </Paper>
    </Box>
  );
}