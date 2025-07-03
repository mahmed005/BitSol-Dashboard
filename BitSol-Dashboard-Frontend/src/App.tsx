import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import type { LinkProps } from "@mui/material/Link";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";
import React from "react";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Sans-Serif",
  },
  palette: {
    primary: {
      main: "#1565D8",
    },
    "white-selected": {
      main: "#F5F9FF",
    },
    customGrey: {
      main: "#8692A6",
      dark: "#62618F",
      light: "#D5D4F0",
    },
    tertiary: {
      light: "#F572B9",
      main: "#EE4878",
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
