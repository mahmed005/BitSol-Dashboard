import { Stack } from "@mui/material";
import CourseProgress from "../components/Settings/Analytics/CourseProgress";
import Masonry from "react-masonry-css";
import TrafficSources from "../components/Settings/Analytics/TrafficSources";
import Recycled from "../components/Settings/Analytics/Recycled";
import Goals from "../components/Settings/Analytics/Goals";

export default function AnalyticsPage() {
  return (
    <Stack marginTop={4} width={"100%"}>
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
    </Stack>
  );
}
