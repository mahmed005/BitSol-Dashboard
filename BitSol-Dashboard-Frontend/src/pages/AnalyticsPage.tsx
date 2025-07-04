import { Stack } from "@mui/material";
import CourseProgress from "../components/Settings/Analytics/CourseProgress";
import Masonry from "react-masonry-css";
import TrafficSources from "../components/Settings/Analytics/TrafficSources";
import Recycled from "../components/Settings/Analytics/Recycled";
import Goals from "../components/Settings/Analytics/Goals";
import { useState } from "react";
import CustomCard from "../components/Settings/Analytics/CustomCard";
import LineChart from "../components/Settings/Analytics/LineChart";

const cards = [
  {
    key: "Impressions",
    value: 383,
  },
  {
    key: "Click-through rate",
    value: "9.1%",
  },
  {
    key: "Views",
    value: 97,
  },
  {
    key: "Unique Viewers",
    value: 54,
  },
];

export default function AnalyticsPage() {
  const [active, setActive] = useState(0);
  return (
    <Stack marginTop={4} spacing={3} width={"100%"}>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <CourseProgress
          mainHeading="Your Progress"
          subHeading="32 of 42 complete"
          text="Finish course to get certificate."
          dimension={7.3}
        />
        <TrafficSources />
        <Recycled />
        <Goals />
        <CourseProgress
          marginTop={"2rem"}
          mainHeading="Your Tasks"
          subHeading="22 of 52 complete"
          dimension={5}
        />
      </Masonry>
      <Stack justifyContent={"center"} gap={"0.5rem"} direction={"row"}>
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            Key={card.key}
            value={card.value}
            isActive={index === active}
            number={index}
            setActive={setActive}
          />
        ))}
      </Stack>
      <LineChart />
    </Stack>
  );
}
