import { Grid } from "@mui/material";
import LeftSection from "../LeftSection";
import RightSection1 from "./RightSection1";
import RightSection2 from "./RightSecton2";
import RightSection3 from "./RightSection3";

export default function MainPage() {
    return <Grid container>
        <LeftSection />
        <RightSection3 />
    </Grid>
};