import { Button, Grid, Stack, Typography, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Form2 from "./Form2";
import { goBackRegisterPage } from "../../../utils/utilityFunctions";
import { useSearchParams } from "react-router";
import type { RegistrationData } from "./MainPage";

export default function RightSection2({
  setRegistrationData,
}: {
  setRegistrationData: React.Dispatch<
    React.SetStateAction<Partial<RegistrationData>>
  >;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
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
              goBackRegisterPage(searchParams, setSearchParams);
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
              STEP 02/03
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "100%",
                fontWeight: "600",
                color: "#8692A6",
              }}
            >
              Residency Info.
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
            Complete Your Profile!
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
          <Form2 setRegistrationData={setRegistrationData} />
        </Stack>
      </Stack>
    </Grid>
  );
}
