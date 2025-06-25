import { Grid } from "@mui/material";
import LeftSection from "../LeftSection";
import RightSection from "./RightSection";

export default function MainPage() {
  return (
    <Grid container>
      <LeftSection />
      <RightSection />
    </Grid>
  );
}
