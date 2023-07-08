import HourlyDetails from "./hourly-details";
import Sidebar from "./sidebar";
import { Grid } from "@mui/material";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#b5d8ff",
        height: 1000,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#5c9ce5",

          width: "90%",
          borderRadius: 50,
        }}
      >
        <Grid container direction="row">
          <Grid item md={3.2} lg={3.2}>
            <Sidebar />
          </Grid>
          <Grid item md={8.8} lg={8.8}>
            <HourlyDetails />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
