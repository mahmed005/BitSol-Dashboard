import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import CustomButton from "../../UI/CustomButton";

export default function SideCard() {
  return (
    <Card
      sx={{
        alignSelf: "flex-start",
        boxShadow: "none",
        backgroundColor: "primary.main",
        color: "white",
        borderRadius: "10px",
        width: {
          xs: "100%",
          sm: "auto",
        },
      }}
      variant="elevation"
    >
      <CardContent>
        <Stack
          direction={{ xs: "row", sm: "column" }}
          spacing={{ xs: 0, sm: 1 }}
          justifyContent={{ xs: "space-between" }}
        >
          <Stack spacing={1}>
            <Typography variant="body2">Your plan</Typography>
            <Stack spacing={0.25}>
              <Typography fontWeight={"600"} variant="h5">
                Pro Annual
              </Typography>
              <Typography variant="body2">Renews on Nov. 2021</Typography>
            </Stack>
          </Stack>
          <CardActions
            sx={{
              padding: "0",
              paddingTop: "0.5rem",
            }}
          >
            <CustomButton
              classes={{
                borderColor: "white",
                color: "white",
              }}
              text="Cancel Subscription"
              importance="outlined"
            />
          </CardActions>
        </Stack>
      </CardContent>
    </Card>
  );
}
