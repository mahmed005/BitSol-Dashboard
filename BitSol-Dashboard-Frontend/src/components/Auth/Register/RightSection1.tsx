import { Button, Grid, Stack, Typography, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Form1 from "./Form1";
import { useNavigate } from "react-router";
import type { RegistrationData } from "./MainPage";

export default function RightSection1({
  setRegistrationData,
}: {
  setRegistrationData: React.Dispatch<
    React.SetStateAction<Partial<RegistrationData>>
  >;
}) {
  const navigate = useNavigate();
  return (
    <Grid size={{ xs: 12, md: 7 }} p={{ xs: 2, md: 6 }}>
      <Stack spacing={10}>
        <Stack
          width={"100%"}
          justifyContent={"space-between"}
          direction={"row"}
          px={0}
        >
          <Button
            onClick={() => {
              navigate("/join-us");
            }}
            sx={{
              color: "#8692A6",
              fontSize: "1.25rem",
            }}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            gap={0.5}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.875rem",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#BDBDBD",
              }}
            >
              STEP 01/03
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "100%",
                fontWeight: "600",
                color: "#8692A6",
              }}
            >
              Personal Info.
            </Typography>
          </Box>
        </Stack>
        <Stack
          spacing={"1rem"}
          maxWidth={{ sm: "80%", xs: "95%" }}
          pl={{ xs: 2, sm: 8 }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.875rem",
            }}
            variant="h2"
          >
            Register Individual Account!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#8692A6",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            For the purpose of industry regulation, your details are required.
          </Typography>
          <Form1 setRegistrationData={setRegistrationData} />
        </Stack>
      </Stack>
    </Grid>
  );
}
