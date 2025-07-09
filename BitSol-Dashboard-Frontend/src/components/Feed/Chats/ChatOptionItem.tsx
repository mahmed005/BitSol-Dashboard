import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function ChatOptionItem({
  imgSrc,
  main,
  secondary,
  lastMessageTime,
  newMessages,
}: {
  imgSrc: string;
  main: string;
  secondary: string;
  lastMessageTime: string;
  newMessages?: number;
}) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            width: "3rem",
            height: "3rem",
          }}
          src={imgSrc}
        />
      </ListItemAvatar>
      <ListItemText primary={main} secondary={secondary} />
      <Stack alignItems={"center"}>
        <Typography
          sx={{
            color:
              newMessages !== undefined ? "primary.main" : "customGrey.dark",
          }}
          variant="body2"
        >
          {lastMessageTime}
        </Typography>
        {newMessages !== undefined && (
          <div className="flex justify-center text-white rounded-full items-center w-8 h-8 bg-blue-600">
            {newMessages}
          </div>
        )}
      </Stack>
    </ListItem>
  );
}
