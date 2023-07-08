import React from "react";
import { Grid } from "@mui/material";
import cloud from "../assets/images/cloud.png";
import thermostat from "../assets/images/thermostat.png";
// import Wind from "../assets/images/wind.png";
import Wind from "./wind";
import LatestArticleCard from "./humidity";

import { Article } from "./latest-article.styled";
import ChancesOfRain from "./chance-of-rain";
import FeelsLike from "./feels-like";
import UiIndex from "./ui-index";
import Precipitation from "./precipitation";
const LatestArticles = () => {
  // var articles = [
  //   {
  //     id: "1",
  //     name: "Humidity",
  //     url: { wind },
  //     probability: "82% bad",
  //   },
  //   {
  //     id: "2",
  //     name: "Wind ",
  //     url: { wind },
  //     probability: "8 Km/h",
  //   },
  //   {
  //     id: "3",
  //     name: "Precipitation",
  //     url: { wind },
  //     probability: "1.4 cm",
  //   },
  //   {
  //     id: "4",
  //     name: "UV index",

  //     probability: "4 medium",
  //   },
  //   {
  //     id: "5",
  //     name: "Feels like",
  //     url: { wind },
  //     probability: "30\u00B0C",
  //   },
  //   {
  //     id: "6",
  //     name: "Chance of rain",
  //     url: { wind },
  //     probability: "42%",
  //   },
  // ];

  return (
    <Grid container sx={{ p: 4 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Article>More details of today's weather</Article>
      </Grid>

      <Grid md={4} lg={4} display="flex">
        <LatestArticleCard />
      </Grid>
      <Grid md={4} lg={4} display="flex">
        <Wind />
      </Grid>
      <Grid md={4} lg={4} display="flex">
        <Precipitation />
      </Grid>
      <Grid md={4} lg={4} display="flex">
        <UiIndex />
      </Grid>
      <Grid md={4} lg={4} display="flex">
        <FeelsLike />
      </Grid>
      <Grid md={4} lg={4} display="flex">
        <ChancesOfRain />
      </Grid>
    </Grid>
  );
};

export default LatestArticles;
