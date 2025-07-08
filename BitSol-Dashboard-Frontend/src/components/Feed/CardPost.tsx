import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import CustomButton from "../UI/CustomButton";

export default function CardPost({
  imgSrc,
  main,
  secondary,
  type,
  isFollowed,
}: {
  imgSrc: string;
  main: string;
  secondary: string;
  type: "Article" | "Person";
  isFollowed?: boolean;
}) {
  return (
    <CustomCard
      classes={{
        padding: 0,
        paddingBottom: "1rem",
      }}
    >
      <CardMedia
        sx={{
          height: "12.5rem",
        }}
        image={imgSrc}
      />
      <CardContent>
        <Typography variant="body1">{main}</Typography>
        <Typography
          sx={{
            color: "customGrey.dark",
          }}
          variant="body2"
        >
          {secondary}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          text={
            type === "Article" ? "Read" : isFollowed ? "Unfollow" : "Follow"
          }
          importance="outlined"
          classes={{
            width: "100%",
            borderColor: !isFollowed ? "primary.main" : "warning.dark",
            color: !isFollowed ? "primary.main" : "warning.dark",
          }}
        />
      </CardActions>
    </CustomCard>
  );
}
