import { Stack, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

export default function CourseProgress({
  dimension,
  mainHeading,
  subHeading,
  text,
  marginTop,
}: {
  dimension: number;
  mainHeading: string;
  subHeading: string;
  text?: string;
  marginTop?: string;
}) {
  return (
    <Stack marginTop={marginTop || 0} className="masonry-item" spacing={2}>
      <Typography variant="h6">{mainHeading}</Typography>
      <Stack direction={"row"} spacing={2}>
        <ProgressCircle dimension={dimension} percentage={93} />
        <Stack>
          <Typography fontWeight={600} variant="h6">
            {subHeading}
          </Typography>
          {text && <Typography variant="body2">{text}</Typography>}
        </Stack>
      </Stack>
    </Stack>
  );
}
