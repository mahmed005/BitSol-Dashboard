import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

export default function InfoItem({
  imgSrc,
  main,
  secondary,
  type,
}: {
  imgSrc: string;
  main: string;
  secondary: string;
  type?: "Event" | "Company";
}) {
  return (
    <Stack spacing={2} direction="row" alignItems={"center"}>
      <Avatar
        sx={{
          border: type && type === "Company" ? "2px solid" : "0px solid",
          borderColor: "primary.main",
          width: "3rem",
          height: "3rem",
        }}
        src={imgSrc}
      />
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        flexGrow={1}
      >
        <Stack>
          <Typography fontWeight={600} color="black" variant="body2">
            {main}
          </Typography>
          <Typography variant="body2">{secondary}</Typography>
        </Stack>
        <IconButton
          sx={{
            color: "primary.main",
          }}
        >
          {type && <AssignmentOutlinedIcon />}
          {!type && <MessageIcon />}
        </IconButton>
      </Stack>
    </Stack>
  );
}
