import React, { useState } from "react";
import { Grid, Box, Divider } from "@mui/material";
import { Card, TextWrap01, TextWrap02 } from "./latest-article.styled";
import Drop from "../assets/images/thunderstorm.png";
const Precipitation = (props) => {
  const percentage = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
  ];
  return (
    <Card>
      <Grid
        container
        direction="row"
        style={{ paddingTop: 20, paddingLeft: 25, marginBottom: 20 }}
      >
        <Grid item md={9.5} lg={9.5}>
          <TextWrap01>Precipitation</TextWrap01>
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
          <TextWrap02>1.4 cm</TextWrap02>
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
            <Box
              style={{
                height: "5px",
                width: 12,

                marginTop: "5px",
                backgroundColor: "#dcdcdc",
                backgroundPosition: "center",
                backgroundSize: "cover",

                borderRadius: "16px",
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Precipitation;
