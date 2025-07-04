import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const labels = Array.from({ length: 100 }, (_, i) => i * 10); // 0 to 1000
const data = labels.map((x, i) => {
  return Math.min(
    225,
    Math.abs(
      Math.sin(x / 50) * 100 + Math.cos(x / 30) * 80 + Math.random() * 80
    )
  );
});

const fakeData = {
  labels,
  datasets: [
    {
      label: "Click-through rate",
      data,
      pointRadius: 0,
      borderColor: "#1565D8",
    },
  ],
};

export default function LineChart() {
  return (
    <Box width={"100%"}>
      <Line
        options={{
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
            y: {
              grid: {
                display: true,
              },
              border: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 4,
              },
            },
          },
        }}
        data={fakeData}
      />
    </Box>
  );
}
