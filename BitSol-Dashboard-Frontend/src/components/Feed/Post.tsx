import { Avatar, Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import PublicIcon from "@mui/icons-material/Public";

export default function Post({
  accSrc,
  accName,
  timePassed,
  text,
  imgSrc,
}: {
  accSrc: string;
  accName: string;
  timePassed: string;
  text: string;
  imgSrc: string;
}) {
  return (
    <CustomCard>
      <Stack spacing={1}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar
            sx={{
              width: "3rem",
              height: "3rem",
            }}
            variant="square"
            src={accSrc}
          />
          <Stack>
            <Typography fontWeight={700} variant="body1">
              {accName}
            </Typography>
            <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
              <Typography variant="body2">{timePassed}.</Typography>
              <PublicIcon fontSize="small" />
            </Stack>
          </Stack>
        </Stack>
        <Typography variant="body2">{text}</Typography>
        <img className="max-h-[23rem]" src={imgSrc} alt="Post Pic" />
      </Stack>
    </CustomCard>
  );
}
