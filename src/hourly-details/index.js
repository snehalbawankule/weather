import { Grid, Box } from "@mui/material";
import profile123 from "../assets/images/profile123.jpg";
import { TextWrap01 } from "../sidebar/styled";
import UpcomingHours from "../upcoming-hours/upcoming-hour";
import LatestArticles from "../todays-details/latest-articles";

const HourlyDetails = () => {
  return (
    <Grid
      container
      direction="row"
      style={{
        backgroundColor: "#e4f1ff",
        height: "100%",
        borderRadius: "50px",

        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item md={10} lg={10}>
        <TextWrap01
          style={{
            color: "black",
            fontWeight: 600,
            fontSize: 20,
            paddingLeft: 50,
            paddingTop: 50,
          }}
        >
          Welcome back isabella!
        </TextWrap01>
        <TextWrap01 style={{ color: "black", paddingLeft: 50, fontSize: 15 }}>
          Check out today's weather information.
        </TextWrap01>
      </Grid>
      <Grid item md={2} lg={2}>
        <Box
          style={{
            marginTop: 60,
            height: "60px",
            width: "60px",
            backgroundImage: `url(${profile123})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: 50,
          }}
        />
      </Grid>
      <UpcomingHours />
      <LatestArticles />
    </Grid>
  );
};
export default HourlyDetails;
