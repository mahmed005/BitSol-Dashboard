import { Avatar, IconButton, Rating, Stack, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function EventPlannerItem({
  imgSrc,
  main,
  rating,
}: {
  imgSrc: string;
  main: string;
  rating: number;
}) {
  return (
    <Stack
      alignItems={"center"}
      direction="row"
      justifyContent={"space-between"}
    >
      <Stack alignItems={"center"} spacing={2} direction={"row"}>
        <Avatar
          src={imgSrc}
          sx={{
            width: "3.5rem",
            height: "3.5rem",
          }}
        />
        <Stack>
          <Typography>{main}</Typography>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2">{rating.toFixed(1)}</Typography>
            <Rating name="simple-uncontrolled" readOnly value={rating} />
          </Stack>
        </Stack>
      </Stack>
      <IconButton
        sx={{
          color: "primary.main",
        }}
      >
        <CallOutlinedIcon />
      </IconButton>
    </Stack>
  );
}
