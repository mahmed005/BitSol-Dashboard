import { Avatar, ListItem, Stack, Typography } from "@mui/material";

export default function NotificationItem({
  imgSrc,
  main,
  secondary,
  isNew,
}: {
  imgSrc: string;
  main: string;
  secondary: string;
  isNew: boolean;
}) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Stack alignItems={"center"} direction="row" spacing={2}>
        <Avatar
          src={imgSrc}
          sx={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        />
        <Stack>
          <Typography fontWeight={500} variant="body1">
            {main}
          </Typography>
          <Typography
            sx={{
              color: "customGrey.dark",
            }}
            variant="body2"
          >
            {secondary}
          </Typography>
        </Stack>
      </Stack>
      {isNew && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
    </ListItem>
  );
}
