import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const fakeData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Income",
      data: [3800, 2400, 1500, 3500, 2300, 1400, 1000],
      backgroundColor: "#1565D8",
      categoryPercentage: 0.1,
      barPercentage: 0.8,
      borderRadius: 6,
    },
    {
      label: "Expense",
      data: [1800, 800, 400, 1900, 1500, 1000, 200],
      backgroundColor: "#F572B9",
      categoryPercentage: 0.1,
      barPercentage: 0.7,
      borderRadius: 6,
    },
  ],
};

export default function ExpensesBarChart() {
  return (
    <Box width={"100%"}>
      <Bar
        options={{
          maintainAspectRatio: false,
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
              border: {
                display: false,
              },
            },
          },
        }}
        data={fakeData}
      />
    </Box>
  );
}
