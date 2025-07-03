import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { _measureText } from "chart.js/helpers";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip);

const fakeData = {
  labels: ["Text", "Images", "Documents", "Videos"],
  datasets: [
    {
      label: "Share",
      data: [32, 25, 22, 11],
      backgroundColor: ["#1565D8", "#5F9CF3", "#96B3FF", "#F572B9"],
      borderRadius: 6,
    },
  ],
};

const centerTextPlugin = {
  id: "recycled-center-text",
  afterDraw(chart: { ctx: any; width: any; height: any }) {
    const { ctx, width, height } = chart;
    ctx.restore();

    const text1 = "Total";
    const text2 = "47.1k";

    ctx.font = "16px Inter";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#555B6D";
    ctx.fillText(
      text1,
      (width - ctx.measureText(text1).width) / 2,
      height / 2 - 18
    );
    ctx.fillStyle = "black";
    ctx.font = "bold 16px Inter";
    ctx.fillText(text2, (width - ctx.measureText(text2).width) / 2, height / 2);

    ctx.save();
  },
};

export default function RecycledChart() {
  return (
    <Box width={"50%"}>
      <Doughnut
        options={{
          radius: "100%",
          cutout: "80%",
        }}
        data={fakeData}
        plugins={[centerTextPlugin]}
      />
    </Box>
  );
}
