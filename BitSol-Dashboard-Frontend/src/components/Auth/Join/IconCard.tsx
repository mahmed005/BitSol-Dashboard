import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function IconCard({
  iconPath,
  heading,
  text,
  handleClick,
}: {
  iconPath: string;
  heading: string;
  text: string;
  handleClick: React.MouseEventHandler | undefined;
}): React.ReactNode {
  return (
    <Card
      sx={{
        transition: "all 0.3s",
        "&:hover": {
          borderColor: "primary.main",
        },
        "&:hover .icon-button": {
          opacity: 1,
        },
      }}
      variant="outlined"
    >
      <CardActionArea
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "1.75rem",
          paddingY: "1.625rem",
          gap: "1.75rem",
          boxShadow: "none",
        }}
        onClick={handleClick}
      >
        <CardMedia
          component={"img"}
          src={iconPath}
          sx={{
            height: "3.25rem",
            width: "3.25rem",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: "100%",
              fontWeight: "500",
            }}
            variant="h3"
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#8692A6",
            }}
            variant="body1"
          >
            {text}
          </Typography>
        </Box>
        <IconButton
          className="icon-button"
          sx={{
            opacity: "0",
            transition: "all 0.3s",
            color: "primary.main",
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
}
