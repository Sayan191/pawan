/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import { isAuthenticated } from "./helper/helper";
import Member from "./pages/Member";
import StoryPoints from "./pages/StoryPoints";
import { getPoints } from "./helper/helper";

const PlanningPoker = () => {
  const [showContent, setShowContent] = useState(false);
  const [showSelection, setShowSelection] = useState(false);
  const [Selection, setSelection] = useState(false);
  const [points, setPoints] = useState(); //points

  //setPoints(getPoints());
  if (showSelection) {
    setSelection(showSelection);
    setPoints(getPoints());
    setShowSelection(false);
  }
  const cardStyle = {
    color: "red",
    fontSize: 55,
  };
  const firstName = {
    paddingTop: 0,
    color: "black",
    fontSize: 24,
    marginTop: 1,
    marginLeft: 60,
  };

  return (
    <>
      <Navbar
        showContent={false}
        setShowContent={setShowContent}
        showSelection={false}
        setShowSelection={setShowSelection}
      />
      {isAuthenticated() && isAuthenticated().teamDetails.manager == true && (
        <>
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
              <Typography color="text.secondary">
                {Selection == false ? (
                  <b> Planning Porker</b>
                ) : (
                  <Typography style={cardStyle} variant="h3" gutterBottom>
                    {points}
                  </Typography>
                )}
                {/* { showSelection == true && <b> {points} </b> && setShowSelection(false)} */}
              </Typography>
            </Paper>
          </Box>
          <Typography style={firstName}>
            {isAuthenticated().teamDetails.name}
          </Typography>
        </>
      )}
      {isAuthenticated() && isAuthenticated().teamDetails.manager == false && (
        <Member />
      )}
      {showContent && <StoryPoints />}
    </>
  );
};

export default PlanningPoker;
