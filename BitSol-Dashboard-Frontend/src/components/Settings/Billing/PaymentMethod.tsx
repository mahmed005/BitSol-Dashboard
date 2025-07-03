import { Stack, Typography } from "@mui/material";
import CustomButton from "../../UI/CustomButton";
import visaCardPic from "../../../assets/visa_card.png";

export default function PaymentMethod() {
  return (
    <Stack spacing={3}>
      <Stack spacing={0}>
        <Typography
          sx={{
            fontWeight: "600",
          }}
          variant="h6"
        >
          Payment Method
        </Typography>
        <Typography
          sx={{
            color: "customGrey.dark",
          }}
          variant="body2"
        >
          Manage billing information and view receips
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <img src={visaCardPic} alt="visa-card" />
          <Typography variant="body2">Visa ending in 2255</Typography>
        </Stack>
        <CustomButton
          classes={{
            color: "black",
            borderColor: "customGrey.main",
          }}
          text="Remove"
          importance="outlined"
        />
      </Stack>
    </Stack>
  );
}
