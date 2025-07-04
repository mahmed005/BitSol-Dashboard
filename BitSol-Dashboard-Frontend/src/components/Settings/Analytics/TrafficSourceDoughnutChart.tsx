import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Tooltip, ArcElement);

const fakeData = {
  labels: ["Channel Pages", "Direct or unknown", "Search", "External"],
  datasets: [
    {
      label: "Traffic Share",
      data: [37.5, 33.6, 11, 6],
      backgroundColor: ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"],
      hoverOffset: 4,
      borderWidth: 4,
    },
  ],
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: { ctx: any; width: any; height: any }) => {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = "0.5rem";
    ctx.font = `${fontSize} sans-serif`;
    ctx.textBaseline = "middle";

    const text = "Traffic Sources";
    const textX = (width - ctx.measureText(text).width) / 2;
    const textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

export default function TrafficSourceDoughnutChart() {
  return (
    <Box width={"50%"}>
      <Doughnut
        options={{
          animation: false,
          radius: "70%",
          cutout: "75%",
        }}
        plugins={[centerTextPlugin]}
        data={fakeData}
      />
    </Box>
  );
}
