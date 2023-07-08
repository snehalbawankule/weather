import React, { useState } from "react";
import { Grid, Box, Divider } from "@mui/material";
import { Card, TextWrap01, TextWrap02 } from "./latest-article.styled";
import Drop from "../assets/images/thermostat.png";
const FeelsLike = (props) => {
  const percentage = ["0\u00B0", "25\u00B0", "50\u00B0"];
  const mid = "30\u00B0";
  return (
    <Card>
      <Grid
        container
        direction="row"
        style={{ paddingTop: 20, paddingLeft: 25, marginBottom: 20 }}
      >
        <Grid item md={9.5} lg={9.5}>
          <TextWrap01>Feels like</TextWrap01>
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
          <TextWrap02>{mid}</TextWrap02>
        </Grid>

        <Grid
          item
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "space-between",

            marginRight: 24,
          }}
        >
          {percentage.map((page, index) => (
            <TextWrap01
              key={index}
              style={{
                color: "black",
                fontSize: "10px",
              }}
            >
              {page}
            </TextWrap01>
          ))}
        </Grid>
        <Grid item md={12} lg={12}>
          <Box
            style={{
              height: "5px",
              width: 200,
              marginTop: "5px",
              backgroundColor: "#dcdcdc",
              backgroundPosition: "center",
              backgroundSize: "cover",

              borderRadius: "16px",
            }}
          >
            <Box
              style={{
                width: `${65}%`,
                height: 5,
                backgroundColor: "#5c9ce5",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FeelsLike;
