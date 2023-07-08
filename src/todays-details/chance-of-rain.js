import React from "react";
import { Grid, Box } from "@mui/material";
import { Card, TextWrap01, TextWrap02 } from "./latest-article.styled";
import Drop from "../assets/images/outline_water_drop_white_24dp.png";
const ChancesOfRain = (props) => {
  const percentage = ["0%", "25%", "50%", "75%", "100%"];
  return (
    <Card>
      <Grid
        container
        direction="row"
        style={{ paddingTop: 20, paddingLeft: 25, marginBottom: 20 }}
      >
        <Grid item md={9.5} lg={9.5}>
          <TextWrap01>Chance of rain</TextWrap01>
        </Grid>
        <Grid item md={2.5} lg={2.5}>
          <Box
            style={{
              borderRadius: "7px",
              height: "30px",
              width: "30px",

              backgroundImage: `url(${Drop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <TextWrap02>42%</TextWrap02>
        </Grid>

        <Grid
          item
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "space-around",

            marginLeft: -12,
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
            {" "}
            <Box
              style={{
                width: `${40}%`,
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

export default ChancesOfRain;
