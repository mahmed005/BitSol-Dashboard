import { Box, Grid, Stack, Typography } from "@mui/material";
import bgPic from "../../assets/join-us-bg-pic.png";
import logo from "../../assets/logo.svg";
import quotePic from "../../assets/quote.png";
import ticPic from "../../assets/tick-icon.svg";
import quoteShapePic from "../../assets/quote-shape.svg";

export default function LeftSection(): React.ReactNode {
  return (
    <Grid
      container
      size={{ xs: 0, sm: 5 }}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        position: "relative",
        backgroundImage: `url(${bgPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100dvh",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"100dvh"}
      >
        <Box
          sx={{
            position: "absolute",
            width: "5.625rem",
            top: "10%",
            left: "10%",
          }}
          component={"img"}
          src={logo}
          alt="bitsol-logo"
        />
        <Box maxWidth={"80%"} position={"relative"} pb={3} mt={10}>
          <Box width={"100%"}>
            <Box component={"img"} src={quotePic} alt="quote-starting-pic" />
          </Box>
          <Typography
            variant="body2"
            sx={{
              lineHeight: { lg: "2.375", md: "2.0rem", sm: "1.75rem" },
              fontSize: { md: "1.25rem", sm: "1rem", xs: "0.75rem" },
            }}
            color="white"
          >
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </Typography>
          <Stack alignItems={"center"} direction={"row"} mt={1}>
            <Typography
              color="white"
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: "100%",
                fontWeight: "500",
              }}
            >
              Vincent Obi
            </Typography>
            <Box
              display={"inline-block"}
              ml={1.5}
              component={"img"}
              src={ticPic}
              alt="Tick"
            />
          </Stack>
          <Box
            component={"img"}
            src={quoteShapePic}
            alt="Step"
            position={"absolute"}
            bottom={0}
            right={0}
          />
        </Box>
      </Box>
    </Grid>
  );
}
