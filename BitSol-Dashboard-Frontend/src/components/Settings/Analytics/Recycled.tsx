import { Stack, Typography } from "@mui/material";
import CustomButton from "../../UI/CustomButton";
import RecycledChart from "./RecycledChart";

export default function Recycled() {
  return (
    <Stack marginTop={"1.5rem"} spacing={2} maxWidth={"100%"}>
      <Typography variant="h6">Recycled</Typography>
      <Stack width={"100%"} alignItems={"center"} direction={"row"} spacing={2}>
        <RecycledChart />
        <Stack width={"50%"} spacing={1}>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <div className="h-2 w-2 rounded-full bg-[#1565D8]"></div>
              <Typography
                sx={{
                  color: "customGrey.dark",
                }}
                variant="body2"
              >
                Text
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              32%
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <div className="h-2 w-2 rounded-full bg-[#5F9CF3]"></div>
              <Typography
                sx={{
                  color: "customGrey.dark",
                }}
                variant="body2"
              >
                Images
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              25%
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <div className="h-2 w-2 rounded-full bg-[#96B3FF]"></div>
              <Typography
                sx={{
                  color: "customGrey.dark",
                }}
                variant="body2"
              >
                Documents
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              22%
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <div className="h-2 w-2 rounded-full bg-[#F572B9]"></div>
              <Typography
                sx={{
                  color: "customGrey.dark",
                }}
                variant="body2"
              >
                Videos
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              11%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <CustomButton
        text="Read Full Report"
        importance="outlined"
        classes={{
          borderColor: "customGrey.main",
          color: "customGrey.dark",
        }}
      />
    </Stack>
  );
}
