import { Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function PageIndicator() {
  let pathname = useLocation().pathname.split("/settings")[1];

  if (pathname === "") pathname = "General";
  else pathname = pathname.split("/")[1];
  pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <Typography variant="h6" component={"h1"}>
      {pathname}
    </Typography>
  );
}
