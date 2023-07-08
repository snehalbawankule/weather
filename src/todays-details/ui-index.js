import React, { useState } from "react";
import { Grid, Box, Divider } from "@mui/material";
import { Card, TextWrap01, TextWrap02 } from "./latest-article.styled";
import Drop from "../assets/images/light.png";
const UiIndex = (props) => {
  return (
    <Card>
      <Grid
        container
        direction="row"
        style={{ paddingTop: 20, paddingLeft: 25, marginBottom: 20 }}
      >
        <Grid item md={9.5} lg={9.5}>
          <TextWrap01>UI index</TextWrap01>
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
          <TextWrap02>4 medium</TextWrap02>
        </Grid>

        <Grid item md={2.4} lg={2.4}>
          <TextWrap01>0-2</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 30,
              marginTop: "5px",
              backgroundColor: "#5c9ce5",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={2.4} lg={2.4}>
          <TextWrap01>3-5</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 30,
              marginTop: "5px",
              backgroundColor: "#dcdcdc",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          >
            <Box
              style={{
                width: `${40}%`,
                height: 5,
                backgroundColor: "#5c9ce5",
              }}
            />
          </Box>
        </Grid>
        <Grid item md={2.4} lg={2.4}>
          <TextWrap01>6-7</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 30,
              marginTop: "5px",
              backgroundColor: "#dcdcdc",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={2.4} lg={2.4}>
          <TextWrap01>8-10</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 30,
              marginTop: "5px",
              backgroundColor: "#dcdcdc",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={2.4} lg={2.4}>
          <TextWrap01>11+</TextWrap01>
          <Box
            style={{
              height: "5px",
              width: 30,
              marginTop: "5px",
              backgroundColor: "#dcdcdc",
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

export default UiIndex;
