import { Grid } from "@mui/material";
import LeftSection from "../LeftSection";
import RightSection1 from "./RightSection1";
import RightSection2 from "./RightSection2";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

export default function MainPage(): React.ReactNode {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (!mode || (mode !== "login" && mode !== "forgot-password")) {
      const params = new URLSearchParams();
      params.append("mode", "login");
      setSearchParams(params, {
        preventScrollReset: true,
      });
    }
  }, [searchParams]);

  const mode = searchParams.get("mode");

  const componentRendered =
    mode === "login" ? (
      <RightSection1 />
    ) : mode === "forgot-password" ? (
      <RightSection2 />
    ) : null;

  return (
    <Grid container>
      <LeftSection />
      {componentRendered}
    </Grid>
  );
}
