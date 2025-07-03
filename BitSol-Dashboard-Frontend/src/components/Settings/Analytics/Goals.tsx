import { MenuItem, Select, Stack, Typography } from "@mui/material";
import BarChart from "./BarChart";

const fakeData = {
  labels: ["Direct", "Organic", "Social", "Referral"],
  datasets: [
    {
      label: "Sources",
      data: [3183, 3846, 1058, 174],
      backgroundColor: ["#1565D8", "#5F9CF3", "#F572B9", "#96B3FF"],
    },
  ],
};

export default function Goals() {
  return (
    <Stack marginTop={3} spacing={3}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"600"} variant="h6">
          Goals
        </Typography>
        <Select
          sx={{
            fontSize: "0.875rem",
            color: "customGrey.dark",
            borderColor: "customGrey.main",
            "& .MuiSelect-select": {
              paddingY: "0.5rem",
              paddingLeft: "0.5rem",
            },
          }}
          defaultValue={"month"}
        >
          <MenuItem value={"week"}>This Week</MenuItem>
          <MenuItem value={"month"}>This Month</MenuItem>
        </Select>
      </Stack>
      <BarChart data={fakeData} />
    </Stack>
  );
}
