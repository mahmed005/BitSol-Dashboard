import { Avatar, Button, Stack, TextField } from "@mui/material";
import CustomCard from "./CustomCard";
import pfp from "../../assets/feed_profile_show.svg";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function CreatePost() {
  return (
    <CustomCard>
      <Stack spacing={1}>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Avatar src={pfp} />
          <TextField
            sx={{
              flexGrow: "1",
              "& .MuiInputBase-root": { borderRadius: "20px" },
              "& input": {
                padding: "0.5rem",
              },
            }}
            placeholder="what's on your mind?"
            variant="outlined"
          />
        </Stack>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          alignItems={"center"}
          spacing={4}
        >
          <Button
            sx={{
              textTransform: "none",
            }}
            startIcon={<ImageOutlinedIcon />}
          >
            Media
          </Button>
          <Button
            sx={{
              textTransform: "none",
            }}
            startIcon={<EventOutlinedIcon />}
          >
            Events
          </Button>
          <Button
            sx={{
              textTransform: "none",
            }}
            startIcon={<ArticleOutlinedIcon />}
          >
            Write Articles
          </Button>
        </Stack>
      </Stack>
    </CustomCard>
  );
}
