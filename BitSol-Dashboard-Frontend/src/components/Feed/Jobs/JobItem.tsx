import { Avatar, Stack, Typography } from "@mui/material";

export default function JobItem({
  accSrc,
  title,
  company,
  description,
}: {
  accSrc: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar
        src={accSrc}
        sx={{
          width: "3.5rem",
          height: "100%",
        }}
        variant="square"
      />
      <Stack spacing={0.25}>
        <Typography
          sx={{
            color: "primary.main",
            lineHeight: "1.25rem",
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography fontWeight={"600"} variant="body2">
          {company}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
    </Stack>
  );
}
