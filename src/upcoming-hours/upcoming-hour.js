import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import cloud from "../assets/images/cloud.png";
import sunlight from "../assets/images/sunlight.png";
import profile123 from "../assets/images/profile123.jpg";
import { Button, TextWrap01 } from "../sidebar/styled";
const UpcomingHours = () => {
  const downarrow = "\u003E";
  const pages = [
    "now",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const percentage = ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"];
  const weather = [
    sunlight,
    sunlight,
    cloud,
    cloud,
    sunlight,
    cloud,
    cloud,
    sunlight,
  ];
  const degree = [
    " 27\u00B0C",
    " 28\u00B0C",
    " 28\u00B0C",
    " 29\u00B0C",
    " 30\u00B0C",
    " 29\u00B0C",
    " 29\u00B0C",
    " 28\u00B0C",
  ];
  const celcius = "\u00B0C";
  const farendis = "\u00B0F";
  return (
    <Grid
      container
      direction="row"
      style={{
        backgroundColor: "white",
        borderRadius: "50px",
        marginTop: 30,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      sx={{ mx: 5 }}
    >
      <Grid item md={8} lg={8}>
        <TextWrap01
          style={{
            color: "black",
            fontWeight: 600,
            fontSize: 20,
            paddingLeft: 50,
            paddingTop: 30,
          }}
        >
          Upcoming hours
        </TextWrap01>
      </Grid>
      <Grid item md={2} lg={2}>
        <Button>Rain preciption </Button>
      </Grid>
      <Grid item md={2} lg={2}>
        <Button>Next days {downarrow}</Button>
      </Grid>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        {pages.map((page, index) => (
          <h2
            key={index}
            style={{
              color: "black",
              fontSize: "10px",
              textDecoration: "none",
            }}
            sx={{ minWidth: "50px" }}
          >
            {page}
          </h2>
        ))}
      </Grid>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {weather.map((page, index) => (
          <Box
            style={{
              backgroundImage: `url(${page})`,
              height: "10px",
              paddingLeft: 10,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            sx={{ minWidth: "10px" }}
          />
        ))}
      </Grid>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {degree.map((page, index) => (
          <h2
            key={index}
            style={{
              color: "black",
              fontSize: "10px",
              textDecoration: "none",
            }}
            sx={{ minWidth: "50px" }}
          >
            {page}
          </h2>
        ))}
      </Grid>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {percentage.map((page, index) => (
          <Box
            key={index}
            style={{
              borderLeft: "1px solid black",
              height: 50,
            }}
          />
        ))}
      </Grid>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {percentage.map((page, index) => (
          <h2
            key={index}
            style={{
              color: "black",
              fontSize: "10px",
              textDecoration: "none",
            }}
            sx={{ minWidth: "50px" }}
          >
            {page}
          </h2>
        ))}
      </Grid>
    </Grid>
  );
};
export default UpcomingHours;
