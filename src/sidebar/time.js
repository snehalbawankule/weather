import { Grid } from "@mui/material";
import plus from "../assets/images/plus.png";
import toggle from "../assets/images/toggle.png";
import { TextWrap01 } from "./styled";
const Time = () => {
  const celcius = "28\u00B0C";
  const farendis = "<";
  const rigth = ">";
  return (
    <Grid container sx={{ px: 5, mt: 10 }}>
      <Grid item md={10} lg={10}>
        <TextWrap01>New York, USA</TextWrap01>
      </Grid>
      <Grid item md={2} lg={2}>
        <TextWrap01>7:19</TextWrap01>
      </Grid>
      <Grid item md={10} lg={10}>
        <TextWrap01>Today 28 Sept</TextWrap01>
      </Grid>
      <Grid item md={2} lg={2}>
        <TextWrap01>19:39</TextWrap01>
      </Grid>

      <Grid container direction="row" style={{ marginTop: 40 }}>
        <Grid item md={2} lg={2}>
          <TextWrap01 style={{ fontSize: 25, paddingTop: 35, marginLeft: -15 }}>
            {farendis}
          </TextWrap01>
        </Grid>
        <Grid item md={8} lg={8}>
          <TextWrap01 style={{ fontSize: 70, textAlign: "center" }}>
            {celcius}
          </TextWrap01>
        </Grid>
        <Grid item md={2} lg={2}>
          <TextWrap01 style={{ fontSize: 25, paddingTop: 35, marginLeft: 25 }}>
            {rigth}
          </TextWrap01>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Time;
