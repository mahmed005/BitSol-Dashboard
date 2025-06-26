import { Outlet } from "react-router";
import { Grid } from "@mui/material";
import Navbar from "../components/Settings/Navbar/Navbar";

export default function SettingsRoutePage() {
  return (
    <Grid container width={'100dvw'} minHeight={'100dvh'} flexDirection={{xs: 'column', sm: 'row'}}>
        <Grid size={{xs: 12, sm: 3}}>
            <Navbar />
        </Grid>
        <Grid size={{xs: 12, sm: 9}}>
            <Outlet />
        </Grid>
    </Grid>
  );
}
