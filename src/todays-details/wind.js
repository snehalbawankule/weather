import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Card, TextWrap01, TextWrap02 } from "./latest-article.styled";
import Drop from "../assets/images/wind.png";
const Wind = (props) => {
  return (
    <Card>
      <Grid
        container
        direction="row"
        style={{ paddingTop: 20, paddingLeft: 25, marginBottom: 20 }}
      >
        <Grid item md={9.5} lg={9.5}>
          <TextWrap01>Wind</TextWrap01>
        </Grid>
        <Grid item md={2.5} lg={2.5}>
          <Box
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "7px",
              backgroundColor: "#5c9ce5",
              backgroundImage: `url(${Drop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <TextWrap02>8 Km/h</TextWrap02>
        </Grid>

        <Grid item md={4} lg={4}>
          <TextWrap01>good</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 50,
              marginTop: "5px",
              backgroundColor: "#5c9ce5",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={4} lg={4}>
          <TextWrap01>normal</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 50,
              marginTop: "5px",
              backgroundColor: "#5c9ce5",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={4} lg={4}>
          <TextWrap01>bad</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 50,
              marginTop: "5px",
              backgroundColor: "#5c9ce5",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Wind;
