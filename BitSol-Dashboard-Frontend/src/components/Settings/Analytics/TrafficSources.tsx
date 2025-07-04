import { Stack, Typography } from "@mui/material";
import TrafficSourceDoughnutChart from "./TrafficSourceDoughnutChart";
import CustomButton from "../../UI/CustomButton";
import BarChart from "./BarChart";

const fakeData = {
  labels: ["Channel Pages", "Direct or unknown", "Search", "External"],
  datasets: [
    {
      label: "Traffic Share",
      data: [37.5, 33.6, 11, 6],
      backgroundColor: ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"],
    },
  ],
};

export default function TrafficSources() {
  return (
    <Stack spacing={1}>
      <Stack spacing={-0.5}>
        <Typography fontWeight={"600"} variant="h6">
          Traffic source types
        </Typography>
        <Typography
          sx={{
            color: "customGrey.dark",
          }}
          fontSize={"0.875rem"}
          variant="body2"
        >
          Views · Last 28 days
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <TrafficSourceDoughnutChart />
        <Stack width={"50%"} spacing={0.5}>
          <BarChart width={"100%"} data={fakeData} />
          <CustomButton
            text="See more"
            importance="text"
            classes={{
              textDecoration: "underline",
              alignSelf: "flex-start",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
