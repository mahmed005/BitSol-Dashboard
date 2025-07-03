import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Chart,
} from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const customLabelPlugin = {
  id: "custom_labels",
  afterDatasetsDraw(chart: Chart) {
    const { ctx } = chart;
    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);

    ctx.save();
    meta.data.forEach((bar: any, index: number) => {
      const value = dataset.data[index] as number;
      const label = chart.data.labels?.[index] as string;

      ctx.font = "normal 12px sans-serif";
      ctx.fillStyle = "#111827";
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";

      ctx.fillText(label, bar.x - bar.width, bar.y - 5);

      ctx.textAlign = "left";
      ctx.font = "bold 10px Inter";
      ctx.textBaseline = "middle";
      ctx.fillText(`${value}`, bar.x + 6, bar.y);
    });
    ctx.restore();
  },
};

export default function BarChart({
  data,
}: {
  data: {
    labels: string[];
    datasets: Array<{ data: number[]; backgroundColor: string[] }>;
  };
}) {
  const finalData = JSON.parse(JSON.stringify(data));

  finalData.datasets.forEach((_: any, index: number) => {
    finalData.datasets[index].borderRadius = 6;
    finalData.datasets[index].categoryPercentage = 0.8;
    finalData.datasets[index].barPercentage = 0.3;
  });

  return (
    <Box>
      <Bar
        id="2"
        options={{
          indexAxis: "y",
          plugins: {},
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          layout: {
            padding: {
              top: 15,
              right: 30,
            },
          },
        }}
        data={finalData}
        plugins={[customLabelPlugin]}
      />
    </Box>
  );
}
