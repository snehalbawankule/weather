import { Grid, Box } from "@mui/material";
import plus from "../assets/images/plus.png";
import toggle from "../assets/images/toggle.png";
import { TextWrap01 } from "./styled";
import Time from "./time";
const Sidebar = () => {
  const celcius = "\u00B0C";
  const farendis = "\u00B0F";
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid
        item
        md={4}
        lg={4}
        style={{
          backgroundImage: `url(${plus})`,
          height: "30px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid item md={4} lg={4} display="flex"></Grid>
      <Grid item md={4} lg={4} display="flex">
        <Grid item md={4} lg={4} display="flex">
          <TextWrap01>{celcius}</TextWrap01>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          style={{
            backgroundImage: `url(${toggle})`,
            height: "30px",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid item md={4} lg={4} display="flex">
          <TextWrap01>{farendis}</TextWrap01>
        </Grid>
      </Grid>
      <Time />
    </Grid>
  );
};
export default Sidebar;
